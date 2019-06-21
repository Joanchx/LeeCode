
const twoSum = require('./0001_two-sum');
const assert = require('power-assert');

describe('0001_two-sum', () => {
    it('0001_two-sum', () => {
        const obj = {
            numArray: [2, 7, 11, 15],
            target: 9
        }

        const result = twoSum(obj.numArray, obj.target)
        assert.equal(`${result}`, `${[0, 1]}`)
    })
});