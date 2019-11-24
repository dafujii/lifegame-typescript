import Cell from "../src/cell";

export default class World {
    constructor(private _cells: Cell[][]) {}

    get cells(): Cell[][] {
        return this._cells;
    }

    next(): World {
        const nextCells = this.cells.map((row, y) =>
            row.map((cell, x) => cell.next(this.countAroundAliveCells(x, y)))
        );
        return new World(nextCells);
    }

    private countAroundAliveCells(x: number, y: number): number {
        const xs = [x - 1, x, x + 1];
        const ys = [y - 1, y, y + 1];
        const coords = xs.flatMap(nowX => ys.map(nowY => ({ nowX, nowY })));

        return coords
            .filter(coord => !(coord.nowX === x && coord.nowY === y))
            .filter(
                ({ nowX, nowY }) => this.cells[nowY] && this.cells[nowY][nowX]
            )
            .map(coord => this.cells[coord.nowY][coord.nowX])
            .filter(cell => cell.isAlive).length;
    }
}
