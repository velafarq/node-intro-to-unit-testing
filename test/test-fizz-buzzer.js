const expect = require('chai').expect;
const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function(){

    it('should return "fizz-buzz" if num is divisible by 3 and 5', function() {
        const normalCases = [15, 30, 45];
        normalCases.forEach(input => {
            const answer = fizzBuzzer(input);
            expect(answer).to.equal('fizz-buzz');
        });
    });

    it('should return "fizz" if num is divisible by 3', function() {
        const normalCases = [3, 6, 9, 12];
        normalCases.forEach(input => {
            const answer = fizzBuzzer(input);
            expect(answer).to.equal('fizz');
        });
    });

    it('should return "buzz" if num is divisible by 5', function() {
        const normalCases = [5, 10, 20, 25];
        normalCases.forEach(input => {
            const answer = fizzBuzzer(input);
            expect(answer).to.equal('buzz');
        });
    });

    
    it('should return the original number if it is not divisible by 3 or 5', function() {
        const normalCases = [2, 4, 7, 8];
        normalCases.forEach(input => {
            const answer = fizzBuzzer(input);
            expect(answer).to.equal(input);
        });
    });

    it('should raise error if arg is not a number', function() {
        const badInputs = ['a', '1', false, [1, 2, 3]];
        badInputs.forEach(input => {
            expect(function() {
                fizzBuzzer(input)
            }).to.throw(Error);
        });
    });
});

