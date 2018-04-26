type DrawRaphaelPaths = Array<RaphaelPath | RaphaelElement>;
type DrawPath = { color: string; path: string };
type DrawPathSet = DrawPath[];
type DrawTools = 'pen' | 'eraser';
type DrawHistory = {
    type: string;
    paths: DrawRaphaelPaths;
};
type DrawHistorySet = DrawHistory[];

interface MsDraw {
    drawBoard: RaphaelPaper;
    current: RaphaelPath | RaphaelElement | null;
    drawTool: 'pen' | 'eraser';
    paths: RaphaelSet;
    history: DrawHistorySet;
    drawColor: string;
    eraserOffset: { x: number; y: number };
    _el: HTMLElement;
    readonly _offset?: ClientRect | DOMRect;
    _isStart: boolean;
    id: string;
    _historyPointer: number;

    startDraw(x: number, y: number, color?: string): void;
    drawing(x: number, y: number): void;
    endDraw(x: number, y: number): void;
    createPath(
        x: number,
        y: number,
        color: string
    ): RaphaelElement | RaphaelPath | void;
    path(path: string, color: string): RaphaelElement;
    endPath(x: number, y: number): RaphaelPath | RaphaelElement;
    drawPath(x: number, y: number): RaphaelPath | RaphaelElement;
    createEraser(x: number, y: number, color: string): RaphaelElement | void;
    drawEraser(x: number, y: number): RaphaelElement | void;
    endEraser(x: number, y: number): void;
    restore(str: string, color: string, canEdit: boolean): void;
    clear(): void;
    getPathData(): Array<{ color: string; path: string }>;
    setColor(color: string): string;
    setDrawTool(tool: DrawTools): DrawTools;
    pushHistory(
        type: 'path' | 'eraser',
        paths: DrawRaphaelPaths
    ): DrawHistorySet;
    backHistory(): DrawHistory;
    forwardHistory(): DrawHistory;
    toSVG(): SVGAElement;
    toImage(): string;
    undo(history: number): void;
    _undoPath(paths: DrawRaphaelPaths): void;
    _undoEraser(paths: DrawRaphaelPaths): void;
    _clearSelectPaths(
        eraserBox: BoundingBox,
        paths: RaphaelSet
    ): DrawRaphaelPaths | void;
    _isAIncludeB(boxA: BoundingBox, boxB: BoundingBox): boolean;
    _getOffset(): ClientRect | DOMRect;
}

declare var MsDraw: MsDraw;
declare module 'msdrawboard' {
    export = MsDraw;
}
