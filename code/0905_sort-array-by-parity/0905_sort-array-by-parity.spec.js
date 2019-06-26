
const sortArrayByParity = require('./0905_sort-array-by-parity');
const assert = require('power-assert');

describe('0905_sortArrayByParity', () => {
    it('0905_sortArrayByParity', () => {
        const obj = {
            numArray: [3,1,2,4]
        }

        const result = sortArrayByParity(obj.numArray)
        assert.ok(result, [2, 4, 3, 1])
    })
})