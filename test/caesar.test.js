// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

let input = 'Zebra Magazine'
let shift = 3

describe('caesar()', () => {

    it('is a function', () => {
        expect(caesar).to.be.a('function')
    })

    it('returns false for invalid shift values', () => {
        const invalidShifts = [26, -26, 0, null, undefined]
        const actual = invalidShifts.every((shift) => {
            return caesar(input, shift)
        })
        expect(actual).to.be.false
    })

    it('returns a value for every valid shift', () => {
        const validShifts = [25, -25, 1, -1]
        const actual = validShifts.every((shift) => {
            return caesar(input, shift)
        })
        expect(actual).to.be.true
    })

    it('returns a string', () => {
        const actual = typeof caesar(input, shift)
        expect(actual).to.equal('string')
    })

    it('ignores capital letters', () => {
        const expected = 'cheud pdjdclqh'
        const input = 'ZEBRA MAGAZINE'
        const actual = caesar(input, shift)
        expect(expected).to.equal(actual)
    })
})

describe('encoding', () => {
    it('correctly encodes a message', () => {
        const expected = 'cheud pdjdclqh'
        const actual = caesar(input, shift)
        expect(expected).to.equal(actual)
    })

    it('handles shifts that cause the letter to go past the end of the alphabet', () => {
        const expected = 'cheud pdjdclqh'
        const actual = caesar(input, shift)
        expect(expected).to.equal(actual)
    })

    it('maintains special chars and spaces when encoding', () => {
        const input = '& $$Zebra Magazine$$ &'
        const expected = '& $$cheud pdjdclqh$$ &'
        const actual = caesar(input, shift)
        expect(expected).to.equal(actual)
    })



})

describe('decoding', () => {
    it('correctly decodes a message', () => {
        const input = 'cheud pdjdclqh'
        const shift = -3
        const expected = 'zebra magazine'
        const actual = caesar(input, shift)
        expect(expected).to.equal(actual)
    })

    it('maintains special chars and spaces when decoding', () => {
        const input = '& $$cheud pdjdclqh$$ &'
        const expected = '& $$zebra magazine$$ &'
        const shift = -3
        const actual = caesar(input, shift)
        expect(expected).to.equal(actual)
    })

})