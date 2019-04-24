let chai = require("chai");
let expect = chai.expect;
var vai = ("../lib/xadrez");

describe("xadrez lib", () => {
  describe("xadrez", () => {
      it("rei ganha de peao", () => {
        expect(vai.jogoX("rei", "peao")).to.equal("rei");
      });
    });
});

// let chai = require("chai");
// let expect = chai.expect;
// let chess = require("../lib/xadrez");

// describe("chess lib", () => {
//    describe("chessBattle", () => {
//        it("bishop wins over knight", () => {
//            expect(chess.chessBattle("bishop", "knight")).to.equal("bishop");
//        });
//    });
// });
