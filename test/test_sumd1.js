const commonAndre = require('../index');
const runningSum = commonAndre.runningSum;

const chai = require('chai')
const expect = chai.expect;

// first, we must ensure that what's comming out of our runningSum function is, in fact, an array.
// 'cause as a matter of fact we must use arrays to assure that it's working properly, so:

describe("Sum of 1D Testing Batteries: ", function () {
    describe("It's an array:", function () {
        it("Should return the length as the same as it entered: ", function () {
            expect(runningSum([1, 2, 3, 4])).to.be.an('array')
                .to.not.be.empty;
            expect(runningSum([1, 2, 3, 4])).to.have.lengthOf(4);
            /* It must not only return an array, but also should return the same length that entered. */
        });
        /* them, a good way to ensure that we're having a good time analyzing the true thing: we must return something when we get something that isn't what we wanted. */
        it("Should identify that what we gave isn't an array: ", function () {
            expect(runningSum('totally an array, i swear!')).to.eql(undefined);
            expect(runningSum({ name: 'André', idade: 26 })).to.eql(undefined);
        });
    });

    describe("Constraints verifications: ", function () {
        it("Shouln't include Infinity in the analysis: ", function () {
            expect(runningSum([Infinity, 3, 4, -Infinity])).to.be.an('array')
                .to.not.have.members([Infinity, -Infinity]);
            expect(runningSum([3, Infinity, 4, 5])).to.be.an('array')
                .to.not.have.members([Infinity]);
        });
        it("No more than 1000, one thousand, entries: ", function () {
            expect(runningSum([1, 5, 8].length = 1001)).to.eql(undefined);
        });
    });

    // perfect, now, we just enjoy our function!
    // also, we must remember: eql = '==' equal = '===';

    describe("Now that's what I call a GOOD function: ", function () {
        it("General returning's that we know're good: ", function () {
            expect(runningSum([1, 2, 3, 4])).to.eql([1, 3, 6, 10]);
            expect(runningSum([1, 1, 1, 1, 1])).to.eql([1, 2, 3, 4, 5]);
            expect(runningSum([3, 1, 2, 10, 1])).to.eql([3, 4, 6, 16, 17]);
        });
    });
});