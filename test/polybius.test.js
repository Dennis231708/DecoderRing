const { expect } = require("chai");
const polybiusModule = require("../src/polybius");

describe("polybius()", () => {

    describe("encoding()", () => {
        it("should translate the letters 'i' and 'j' to '42'", () => {
            expect(polybiusModule.polybius("ij")).to.equal("4242");
        });

        it("should encode 'thinkful' to 4432423352125413 ", () => {
            expect(polybiusModule.polybius("thinkful")).to.equal("4432423352125413");
        });

        it("should maintain spaces", () => {
            expect(polybiusModule.polybius("thinkful test")).to.equal("4432423352125413 44513444");
        });
        it("should ignore capital letters", () => {
            expect(polybiusModule.polybius("THINKFUL")).to.equal("4432423352125413");
        });
    });
    describe("decoding", () => {
        it("should decode 4432423352125413 to th(i/j)nkful", () => {
            expect(polybiusModule.polybius("4432423352125413", false)).to.eql("th(i/j)nkful");
        });

        it("should translate 42 to (i/j)", () => {
            expect(polybiusModule.polybius("42", false)).to.eql("(i/j)");
        });

        it("should maintain spaces", () => {
            expect(polybiusModule.polybius("4432423352125413 44513444", false)).to.eql("th(i/j)nkful test");
        });
        it("should return false if the length of all numbers is odd", () => {
            expect(polybiusModule.polybius("245", false)).to.be.false;
        });
    });
});