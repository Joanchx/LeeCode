const findMaxConsecutiveOnes = require('./0485_max-consecutive-ones');
const assert = require('power-assert');

describe('0485_max-consecutive-ones', () => {
    it('0485_max-consecutive-ones', () => {
        const obj = {
            numberArray: [1,0,1,1,0,1]
        }
        const result = findMaxConsecutiveOnes(obj.numberArray);
        assert.equal(result, 2)
    })
})