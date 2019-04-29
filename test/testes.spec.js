let chai = require("chai");
let expect = chai.expect;
var cpfValidatorTeste = ("../index");

describe("cpfValidator", () => {
  describe("input validate", () => {
      it("string is empty", () => {
        expect(cpfValidatorTeste.cpfValidator("")).to.be.false;
      });
      it("input is repeated numbers", () => {
        expect(cpfValidatorTeste.cpfValidator("99999999999")).to.be.false;
      });
      it("input is different to eleven numbers", () => {
        expect(cpfValidatorTest.cpfValidator("123456789101")).to.be.false;
      });
      it("input has strings type", () => {
        expect(cpfValidatorTest.cpfValidator("abcdefghijk")).to.be.false;
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
