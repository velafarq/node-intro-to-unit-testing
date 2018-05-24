const expect = require('chai').expect;
const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function(){

    it('should return words associated with numbers divisible by 3, 5 or 15 or return the number if not', function(){
        const normalCases = [
            [15, 'fizz-buzz'],
            [5, 'buzz'],
            [3, 'fizz'],
            [4, 4]
        ];
        normalCases.forEach(input => {
            const answer = fizzBuzzer(input[0]);
            expect(answer).to.equal(input[1]);
        })
    });

    it('should raise error if arg is not a number', function() {
        const badInputs = ['a', '1', false];
        badInputs.forEach(input => {
            expect(function() {
                fizzBuzzer(input)
            }).to.throw(Error);
        });
    });
});

