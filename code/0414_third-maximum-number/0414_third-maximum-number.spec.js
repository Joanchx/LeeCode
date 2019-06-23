
const thirdMax = require('./0414_third-maximum-number');
const assert = require('power-assert');

describe('0414_third-maximum-number', () => {
    it('0414_third-maximum-number', () => {
        const obj = {
            numArray: [3, 2, 1]
        }

        const result = thirdMax(obj.numArray)
        assert.equal(result, 1)
    })
});