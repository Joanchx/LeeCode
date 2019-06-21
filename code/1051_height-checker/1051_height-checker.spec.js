const heightChecker = require('./1051_height-checker');
const assert = require('power-assert');

describe('1051_height-checker', () => {
    it('1051_height-checker', () => {
        const obj = {
            numArray: [10,6,6,10,10,9,8,8,3,3,8,2,1,5,1,9,5,2,7,4,7,7]
        }

        const result = heightChecker(obj.numArray)
        assert.equal(result, 22)
    })
});