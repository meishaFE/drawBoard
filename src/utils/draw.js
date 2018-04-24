import Raphael from 'raphael';
import uuid from './uuid';
import installExport from '../lib/raphael.export';
import canvg from '../lib/canvg';

installExport(Raphael);

export default class Draw {
    /* ::
    drawBoard: ?Object
    current: ?Object
    drawTool: string
    offset: Object
    paths: any
    trashPaths: Array<Array<Object>>
    history: Array<{type: string, paths: Array<Object>}>
    drawColor: string
    _isStart: boolean
    eraserOffset: {x: number, y: number}
    createPath: Function
    endPath: Function
    drawPath: Function
    startDraw: Function
    isAIncludeB: Function
    drawing: Function
    endDraw: Function
    path: Function
    createEraser: Function
    drawEraser: Function
    endEraser: Function
    restore: Function
    getPathData: Function
    setColor: Function
    setDrawTool: Function
    pushHistory: Function
    toSVG: Function
    undo: Function
    toImage: Function
    */

    constructor(el, { color }) {
        const { width, height } = el.getBoundingClientRect();
        const drawBoard = el ? Raphael(el, width, height) : null;
        this._el = el;
        this.drawBoard = drawBoard;
        this.id = `draw-${uuid()}`;
        this.paths = (drawBoard && drawBoard.set()) || [];
        this.trashPaths = [];
        this.history = [];
        this._historyPointer = 0;
        this._isStart = false;
        this.current = null;
        this.drawTool = 'pen'; // pen or eraser
        this.drawColor = color;
        this.eraserOffset = {
            x: 0,
            y: 0
        };
    }

    // 绘画
    startDraw(x, y, color) {
        const offset = this._getOffset();
        const { top, left } = offset;
        this._offset = offset;
        this._isStart = true;
        if (this.drawTool === 'pen') this.createPath(x - left, y - top, color);
        else if (this.drawTool === 'eraser')
            this.createEraser(x - left, y - top, color);
    }

    drawing(x, y, color) {
        if (!this._isStart) return;
        const { top, left } = this._offset;
        if (this.drawTool === 'pen') this.drawPath(x - left, y - top, color);
        else if (this.drawTool === 'eraser')
            this.drawEraser(x - left, y - top, color);
    }

    endDraw(x, y, color) {
        this._isStart = false;
        const { top, left } = this._offset;
        if (this.drawTool === 'pen') this.endPath(x - left, y - top, color);
        else if (this.drawTool === 'eraser')
            this.endEraser(x - left, y - top, color);
    }

    // 绘制轨迹
    createPath(x, y, color = this.drawColor) {
        const drawBoard = this.drawBoard;

        if (this.drawTool !== 'pen') return;
        if (!drawBoard || !drawBoard.path) return;

        const path = this.path(`M${x},${y}`, color);
        this.current = path;
        this.paths.push(path);
        return path;
    }

    path(path, color = this.drawColor) {
        if (!path) return null;
        if (!this.drawBoard) return null;
        return this.drawBoard.path(path).attr({
            stroke: color,
            'stroke-width': 2,
            'stroke-linecap': 'round',
            'stroke-linejoin': 'round'
        });
    }

    endPath(x, y) {
        const path = this.drawPath(x, y);
        this.pushHistory('path', [path]);
        return path;
    }

    drawPath(x, y) {
        const path = this.current;
        if (!path || !path.attr) return;
        path.attr({ path: `${path.attr('path').toString()}L${x},${y}` });
        return path;
    }

    // 绘制橡皮擦
    createEraser(x, y, color = '#ff0000') {
        const drawBoard = this.drawBoard;

        if (this.drawTool !== 'eraser') return;
        if (!drawBoard || !drawBoard.rect) return;

        const eraser = drawBoard && drawBoard.rect(x, y);
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
        this.eraserOffset = eraser && eraser.attr(['x', 'y']);
        return eraser;
    }

    drawEraser(x, y) {
        const eraser = this.current;

        if (!eraser || !eraser.attr) return;

        const { x: startX, y: startY } = this.eraserOffset || {};
        const wantSetOpts = {};

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

    // eslint-disable-next-line
    endEraser(x, y) {
        const eraser = this.current;
        if (!eraser) return;
        const trashPaths = this._clearSelectPaths(eraser.getBBox(), this.paths);
        trashPaths &&
            trashPaths.length &&
            this.pushHistory('eraser', trashPaths);
        eraser.remove();
    }

    restore(str, color = this.drawColor, canEdit = false) {
        const path = this.path(str, color);
        if (!path) return false;
        if (canEdit) {
            this.paths.push(path);
            this.pushHistory('path', [path]);
        }
        return path;
    }

    clear() {
        this.drawBoard.clear();
        this.paths.clear();
        this.history = [];
        this.current = null;
    }

    // 获取 paths 的数据
    getPathData() {
        const _path = Array.from(this.paths);
        if (!_path || !_path.length) return [];
        return _path.map(p => ({
            color: p.attr('stroke'),
            path: p.attr('path').toString()
        }));
    }

    setColor(color) {
        this.drawColor = color;
        return color;
    }

    setDrawTool(tool) {
        this.drawTool = tool;
        return tool;
    }

    pushHistory(type, paths) {
        this._historyPointer = this.history.push({ type, paths });
        return this.history;
    }

    backHistory() {
        const pointer = --this._historyPointer;
        return this.history[pointer];
    }

    forwardHistory() {
        const pointer = ++this._historyPointer;
        return this.history[pointer];
    }

    toSVG() {
        return this.drawBoard.toSVG();
    }

    toImage() {
        let canvas = document.createElement('canvas');
        canvg(canvas, this.toSVG());
        return canvas.toDataURL();
    }

    // 撤销上一步操作
    undo() {
        if (!this.history.length) return;
        const work = this.backHistory();
        if (!work) return;
        if (work.type === 'path') {
            this._undoPath(work.paths);
        } else if (work.type === 'eraser') {
            this._undoEraser(work.paths);
        }
    }

    _undoPath(paths) {
        paths.forEach(path => {
            path && path.hide && path.hide();
            this.paths.exclude(path);
        });
    }

    _undoEraser(paths) {
        paths.forEach(path => {
            path && path.show && path.show();
            this.paths.push(path);
        });
    }

    // 清除橡皮擦选中的轨迹
    _clearSelectPaths(eraserBox, paths) {
        if (!paths || !paths.length) return;
        const _paths = Array.from(paths);
        const trashs = [];
        _paths.forEach(path => {
            if (!path) return;
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
    _isAIncludeB(boxA, boxB) {
        if (!boxA || !boxB) return false;
        const [maxX, , , minX] = [
            boxA.x,
            boxA.x + boxA.width,
            boxB.x,
            boxB.x + boxB.width
        ].sort((a, b) => a < b);
        const [maxY, , , minY] = [
            boxA.y,
            boxA.y + boxA.height,
            boxB.y,
            boxB.y + boxB.height
        ].sort((a, b) => a < b);
        const width = boxA.width + boxB.width;
        const height = boxA.height + boxB.height;
        if (maxX - minX <= width && maxY - minY <= height) return true;
        return false;
    }

    _getOffset() {
        const el = this._el;
        return el.getBoundingClientRect();
    }
}
