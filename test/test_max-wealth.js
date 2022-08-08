const commonAndre = require('../index');
const maximumWealth = commonAndre.maximumWealth;

const chai = require('chai')
const expect = chai.expect;

describe("Maximum Wealth Testing Batteries: ", function () {
    describe("Arguments must not negate our constraints: ", function () {
        it("Undefined if it's a empty or only one account array: ", function () {
            expect(maximumWealth([])).to.eql(undefined);
            expect(maximumWealth([[1]])).to.eql(undefined);
        });
        it("Also if it's contents are bigger than 50 accounts: ", function () {
            expect(maximumWealth([].length = 51)).to.eql(undefined);
            expect(maximumWealth([[].length = 55])).to.eql(undefined);
        });
    });

    // Now, we can check for it's correct outputs:

    describe("Default outputs: ", function () {
        it("Basic outputs, from LeetCode: ", function () {
            expect(maximumWealth([[1, 2, 3], [3, 2, 1]])).to.eql(6);
            expect(maximumWealth([[1, 5], [7, 3], [3, 5]])).to.eql(10);
            expect(maximumWealth([[2, 8, 7], [7, 1, 3], [1, 9, 5]])).to.eql(17);
        });
        it("Now, in freestyle: ", function () {
            expect(maximumWealth([[5, 8, 10], [8, 56, 22], [100, 54]])).to.eql(154);
            expect(maximumWealth([[22, 68, 20], [3, 25, 16, 32, 10]])).to.eql(110);
        })
    })
})