const commonAndre = require('../index');
const theFizz = commonAndre.theFizz;

const chai = require('chai')
const expect = chai.expect;

describe("The Fizz Buzz Testing Batteries: ", function () {
    describe("First, the basics: ", function () {
        it("Is this a number???? ", function () {
            expect(theFizz('iqwhi')).to.eql(undefined);
            expect(theFizz({ name: 'André', idade: '26' })).to.eql(undefined);
            expect(theFizz(5)).to.eql(["1", "2", "Fizz", "4", "Buzz"]);
        });
    });

    describe("Now, the normal returns: ", function () {
        it("The normal outputs, now: ", function () {
            expect(theFizz(3)).to.eql(["1", "2", "Fizz"]);
            expect(theFizz(5)).to.eql(["1", "2", "Fizz", "4", "Buzz"]);
            expect(theFizz(15)).to.eql(["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]);
        })
    });
});