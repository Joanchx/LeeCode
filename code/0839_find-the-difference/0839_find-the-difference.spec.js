
const findTheDifference = require('./0839_find-the-difference');
const assert = require('power-assert');

describe('0839_find-the-difference', () => {
    it('0839_find-the-difference', () => {
        const obj = {
            string: "abcd",
            stringAdd: "abcde"
        }

        const result = findTheDifference(obj.string, obj.stringAdd)
        assert.equal(result, 'e')
    })
});