let chai = require('chai');
let expect = chai.expect;
let cpfValidatorTeste = require('../lib/index');

describe('cpfValidator', () => {
  it('string is empty', () => {
    expect(cpfValidatorTeste.cpfValidator('')).to.be.false;
  });
  it('string has repeated numbers', () => {
    expect(cpfValidatorTeste.cpfValidator('12121212121')).to.be.false;
  });
  it('string has more than eleven numbers', () => {
    expect(cpfValidatorTeste.cpfValidator('123456789111')).to.be.false;
  });
  it('string has letters instead of numbers', () => {
    expect(cpfValidatorTeste.cpfValidator('abcdefghijk')).to.be.false;
  });
  it('string has number type', () => {
    expect(cpfValidatorTeste.cpfValidator('12345678909')).to.be.true;
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
