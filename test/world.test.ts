import * as assert from "assert";
import World from "../src/world";
import Cell from "../src/cell";

describe("World", () => {
    const a = new Cell(true);
    const d = new Cell(false);

    describe("次の世代を取得できる", () => {
        it("誕生: 死んでいるセルに隣接する生きたセルがちょうど3つあれば、(1,1)に次の世代が誕生すること", () => {
            const world = new World([
                [a, a, d],
                [a, d, d],
                [d, d, d]
            ]);
            const next = world.next();

            assert(next.cells[1][1].isAlive);
        });
        describe("生存：生きているセルに隣接する生きたセルが2つか3つならば、(1,1)が次の世代でも生存すること", () => {
            it("2つのとき", () => {
                const world = new World([
                    [a, a, d],
                    [d, a, d],
                    [d, d, d]
                ]);
                const next = world.next();

                assert(next.cells[1][1].isAlive);
            });
            it("3つのとき", () => {
                const world = new World([
                    [a, a, a],
                    [d, a, d],
                    [d, d, d]
                ]);
                const next = world.next();

                assert(next.cells[1][1].isAlive);
            });
        });
        it("過疎: 生きているセルに隣接する生きたセルが1つ以下ならば、(1,1)が過疎により死滅すること", () => {
            const world = new World([
                [d, d, d],
                [d, a, a],
                [d, d, d]
            ]);
            const next = world.next();

            assert(!next.cells[1][1].isAlive);
        });
        it("過密: 生きているセルに隣接する生きたセルが4つ以上ならば、(1,1)が過密により死滅すること", () => {
            const world = new World([
                [a, a, a],
                [a, a, d],
                [d, d, d]
            ]);
            const next = world.next();

            assert(!next.cells[1][1].isAlive);
        });
    });

    // TODO: ちゃんと動くか若干不安なので、固定物体や振動子のパターンのテストを書く？
});
