import * as assert from "assert";
import Cell from "../src/cell";

describe("Cell", () => {
    const aliveCell = new Cell(true);
    const deadCell = new Cell(false);

    it("自身のセルの周りに生きているセルが1個あるとき、死滅すること", () => {
        assert(!aliveCell.next(1).isAlive);
        assert(!deadCell.next(1).isAlive);
    });

    it("生存中の自身のセルの周りに生きているセルが2個あるとき、生存すること", () => {
        assert(aliveCell.next(2).isAlive);
    });

    it("死滅中の自身のセルの周りに生きているセルが2個あるとき、死滅すること", () => {
        assert(!deadCell.next(2).isAlive);
    });

    it("自身のセルの周りに生きているセルが3個あるとき、生存すること", () => {
        assert(aliveCell.next(3).isAlive);
        assert(deadCell.next(3).isAlive);
    });

    it("自身のセルの周りに生きているセルが4個あるとき、死滅すること", () => {
        assert(!aliveCell.next(4).isAlive);
        assert(!deadCell.next(4).isAlive);
    });

    it("自身のセルの周りに生きているセルが5個あるとき、死滅すること", () => {
        assert(!aliveCell.next(5).isAlive);
        assert(!deadCell.next(5).isAlive);
    });

    it("自身のセルの周りに生きているセルが6個あるとき、死滅すること", () => {
        assert(!aliveCell.next(6).isAlive);
        assert(!deadCell.next(6).isAlive);
    });

    it("自身のセルの周りに生きているセルが7個あるとき、死滅すること", () => {
        assert(!aliveCell.next(7).isAlive);
        assert(!deadCell.next(7).isAlive);
    });

    it("自身のセルの周りに生きているセルが8個あるとき、死滅すること", () => {
        assert(!aliveCell.next(8).isAlive);
        assert(!deadCell.next(8).isAlive);
    });
});
