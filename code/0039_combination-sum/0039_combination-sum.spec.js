
const combinationSum = require('./0039_combination-sum');
const assert = require('power-assert');

describe('0039_combination-sum', () => {
    it('0039_combination-sum', () => {
        const obj = {
            numArray: [2, 6, 3, 7],
            target: 7
        }

        const result = combinationSum(obj.numArray, obj.target)
        //#todo#
        assert.ok(true, result)
    })
});