/// <reference path="../../lib/main.d.ts" />
import uuid from './uuid';
import Raphael from 'raphael';
import installExport from '../lib/raphael.export';
import canvg from '../lib/canvg';

installExport(Raphael);

export default class Draw implements MsDraw {
    public drawBoard: RaphaelPaper;
    public current: RaphaelPath | RaphaelElement | null = null;
    public drawTool: DrawTools = 'pen';
    public paths: RaphaelSet;
    public history: DrawHistorySet = [];
    public drawColor: string;
    public eraserOffset: { x: number; y: number } = {
        x: 0,
        y: 0
    };

    public _el: HTMLElement;
    public _offset?: ClientRect | DOMRect;
    public _isStart: boolean = false;
    public id: string;
    public _historyPointer: number = 0;

    constructor(el: HTMLElement, { color }: { color: string }) {
        if (!el) {
            throw TypeError('el is required and must be HTMLElement');
        }

        const { width, height } = el.getBoundingClientRect();
        const drawBoard = Raphael(el, width, height);

        this.drawBoard = drawBoard;
        this.id = `draw-${uuid()}`;
        this.paths = (drawBoard && drawBoard.set()) || [];

        this._el = el;

        this.drawColor = color;
    }

    // 绘画
    public startDraw(x: number, y: number, color?: string): void {
        const offset = this._getOffset();
        const { top, left } = offset;
        const drawTool = this.drawTool;

        this._offset = offset;
        this._isStart = true;

        switch (drawTool) {
            case 'pen':
                this.createPath(x - left, y - top, color);
                break;
            case 'eraser':
                this.createEraser(x - left, y - top, color);
                break;
            default:
                break;
        }
    }

    public drawing(x: number, y: number): void {
        if (!this._isStart || !this._offset) {
            return;
        }
        const { top, left } = this._offset;
        const drawTool = this.drawTool;

        switch (drawTool) {
            case 'pen':
                this.drawPath(x - left, y - top);
                break;
            case 'eraser':
                this.drawEraser(x - left, y - top);
                break;
            default:
                break;
        }
    }

    public endDraw(x: number, y: number): void {
        if (!this._isStart || !this._offset) {
            return;
        }
        this._isStart = false;
        const { top, left } = this._offset;
        if (this.drawTool === 'pen') {
            this.endPath(x - left, y - top);
        } else if (this.drawTool === 'eraser') {
            this.endEraser(x - left, y - top);
        }
    }

    // 绘制轨迹
    public createPath(
        x: number,
        y: number,
        color: string = this.drawColor
    ): RaphaelElement | RaphaelPath | void {
        const drawBoard = this.drawBoard;

        if (!drawBoard || !drawBoard.path) {
            throw TypeError('drawBoard instance is not exit');
        }

        if (this.drawTool !== 'pen') {
            return;
        }

        const path = this.path(`M${x},${y}`, color);
        this.current = path;
        this.paths.push(path);
        return path;
    }

    public path(path: string, color: string = this.drawColor): RaphaelElement {
        if (!path) {
            throw TypeError('path is required');
        }

        const drawBoard = this.drawBoard;

        if (!drawBoard || !drawBoard.path) {
            throw TypeError('drawBoard instance is not exit');
        }

        return this.drawBoard.path(path).attr({
            stroke: color,
            'stroke-width': 2,
            'stroke-linecap': 'round',
            'stroke-linejoin': 'round'
        });
    }

    public endPath(x: number, y: number): RaphaelPath | RaphaelElement {
        const path: RaphaelPath | RaphaelElement = this.drawPath(x, y);
        this.pushHistory('path', [path]);
        return path;
    }

    public drawPath(x: number, y: number): RaphaelPath | RaphaelElement {
        const path = this.current;

        if (!path || !path.attr) {
            throw TypeError('path is not exit');
        }

        path.attr({ path: `${path.attr('path').toString()}L${x},${y}` });
        return path;
    }

    // 绘制橡皮擦
    public createEraser(
        x: number,
        y: number,
        color: string = '#ff0000'
    ): RaphaelElement | void {
        const drawBoard = this.drawBoard;

        if (!drawBoard || !drawBoard.rect) {
            throw TypeError('drawBoard instance is not exit');
        }

        if (this.drawTool !== 'eraser') {
            return;
        }

        const eraser = drawBoard.rect(x, y, 0, 0);

        eraser.attr({
            r: 0,
            rx: 0,
            ry: 0,
            stroke: color,
            fill: color,
            'fill-opacity': '0.15',
            'stroke-opacity': '0.5'
        });

        this.current = eraser;

        this.eraserOffset = {
            x: eraser.attr('x'),
            y: eraser.attr('y')
        };

        return eraser;
    }

    public drawEraser(x: number, y: number): RaphaelElement | void {
        const eraser = this.current;

        if (!eraser || !eraser.attr) {
            return;
        }

        const { x: startX = 0, y: startY = 0 } = this.eraserOffset || {};

        const wantSetOpts: {
            x?: number;
            y?: number;
            width?: number;
            height?: number;
        } = {};

        if (x < startX) {
            wantSetOpts.x = x;
            wantSetOpts.width = startX - x;
        } else {
            wantSetOpts.width = x - startX;
        }

        if (y < startY) {
            wantSetOpts.y = y;
            wantSetOpts.height = startY - y;
        } else {
            wantSetOpts.height = y - startY;
        }

        eraser.attr(wantSetOpts);
        return eraser;
    }

    public endEraser(x: number, y: number): void {
        const eraser = this.current;

        if (!eraser) {
            throw TypeError('eraser is not exit');
        }

        const trashPaths = this._clearSelectPaths(eraser.getBBox(), this.paths);

        if (trashPaths && trashPaths.length) {
            this.pushHistory('eraser', trashPaths);
        }

        eraser.remove();
    }

    public restore(
        str: string,
        color: string = this.drawColor,
        canEdit: boolean = false
    ): void {
        const path = this.path(str, color);
        if (!path) {
            return;
        }

        if (canEdit) {
            this.paths.push(path);
            this.pushHistory('path', [path]);
        }
    }

    public clear(): void {
        this.drawBoard.clear();
        this.paths.clear();
        this.history = [];
        this.current = null;
    }

    // 获取 paths 的数据
    public getPathData(): DrawPathSet {
        const _path = Array.from(this.paths);
        let result: DrawPathSet = [];
        if (!_path || !_path.length) {
            return result;
        }

        result = _path.map(p => ({
            color: p.attr('stroke'),
            path: p.attr('path').toString()
        }));

        return result;
    }

    public setColor(color: string): string {
        this.drawColor = color;
        return color;
    }

    public setDrawTool(tool: DrawTools): DrawTools {
        this.drawTool = tool;
        return tool;
    }

    public pushHistory(
        type: 'path' | 'eraser',
        paths: DrawRaphaelPaths
    ): DrawHistorySet {
        this._historyPointer = this.history.push({ type, paths });
        return this.history;
    }

    public backHistory(): DrawHistory {
        const pointer = --this._historyPointer;
        return this.history[pointer];
    }

    public forwardHistory(): DrawHistory {
        const pointer = ++this._historyPointer;
        return this.history[pointer];
    }

    public toSVG(): SVGAElement {
        return this.drawBoard.toSVG();
    }

    public toImage(): string {
        const canvas = document.createElement('canvas');
        canvg(canvas, this.toSVG());
        return canvas.toDataURL();
    }

    // 撤销上一步操作
    public undo(history = 1): void {
        if (!this.history.length) {
            return;
        }
        const work = this.backHistory();
        if (!work) {
            return;
        }
        if (work.type === 'path') {
            this._undoPath(work.paths);
        } else if (work.type === 'eraser') {
            this._undoEraser(work.paths);
        }
    }

    public _undoPath(paths: DrawRaphaelPaths): void {
        paths.forEach((path: RaphaelPath | RaphaelElement) => {
            path && path.hide && path.hide();
            this.paths.exclude(path);
        });
    }

    public _undoEraser(paths: DrawRaphaelPaths): void {
        paths.forEach((path: RaphaelPath | RaphaelElement) => {
            path && path.show && path.show();
            this.paths.push(path);
        });
    }

    // 清除橡皮擦选中的轨迹
    public _clearSelectPaths(
        eraserBox: BoundingBox,
        paths: RaphaelSet
    ): DrawRaphaelPaths | void {
        if (!paths || !paths.length) {
            return;
        }
        const _paths = Array.from(paths);
        const trashs: DrawRaphaelPaths = [];

        _paths.forEach(path => {
            if (!path) {
                return;
            }
            const pathBox = path.getBBox();
            if (this._isAIncludeB(eraserBox, pathBox)) {
                path.hide();
                paths.exclude(path);
                trashs.unshift(path);
            }
        });
        return trashs;
    }

    // 判断 A 区域和 B 区域是否有交集
    public _isAIncludeB(boxA: BoundingBox, boxB: BoundingBox): boolean {
        if (!boxA || !boxB) {
            return false;
        }
        const [maxX, , , minX] = [
            boxA.x,
            boxA.x + boxA.width,
            boxB.x,
            boxB.x + boxB.width
        ].sort((a, b) => b - a);

        const [maxY, , , minY] = [
            boxA.y,
            boxA.y + boxA.height,
            boxB.y,
            boxB.y + boxB.height
        ].sort((a, b) => b - a);

        const width = boxA.width + boxB.width;
        const height = boxA.height + boxB.height;

        return maxX - minX <= width && maxY - minY <= height;
    }
    public _getOffset(): ClientRect | DOMRect {
        const el = this._el;
        return el.getBoundingClientRect();
    }
}
