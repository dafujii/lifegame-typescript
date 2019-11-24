export default class Cell {
    constructor(private _isAlive: boolean) {}

    get isAlive(): boolean {
        return this._isAlive;
    }

    /**
     * 次の世代の状態を取得
     * @param count 自身の周りにいる生きているセルの数
     * @return Cell
     */
    next(count: number): Cell {
        if (this.isAlive && count === 2) {
            return new Cell(true);
        } else if (count === 3) {
            return new Cell(true);
        }
        return new Cell(false);
    }
}
