const thirdMax = require('./0459_repeated-substring-pattern');
const assert = require('power-assert');

describe('0459_repeated-substring-pattern', () => {
    it('0459_repeated-substring-pattern', () => {
        const obj = {
            str: "abcabcabcabc"
        }

        const result = thirdMax(obj.str)
        assert.equal(result, true)
    })
});