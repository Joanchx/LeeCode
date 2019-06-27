
const removeElement = require('./0027_remove-element');
const assert = require('power-assert');

describe('0027_remove-element', () => {
    it('0027_remove-element', () => {
        const obj = {
            numArray: [0, 1, 2, 2, 3, 0, 4, 2],
            target: 2
        }

        const result = removeElement(obj.numArray, obj.target)
        assert.equal(result, 5)
    })
});