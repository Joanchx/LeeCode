const plusOne = require('./0066_plus-one');
const assert = require('power-assert');

describe('0066_plus-one', () => {
    it('0066_plus-one', () => {
        const obj = {
            // array: [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
            array: [9]
        }
        const result = plusOne(obj.array)
        // assert.equal(`${result}`, `${[6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]}`)
        assert.equal(`${result}`, `${[1,0]}`)
    })
});

