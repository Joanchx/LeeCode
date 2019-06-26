
const twoSum = require('./0231_power-of-two');
const assert = require('power-assert');

describe('power-of-two', () => {
    it('power-of-two', () => {
        const obj = {
            num: 16
        }

        const result = twoSum(obj.num)
        assert.equal(result, true)
    })
});