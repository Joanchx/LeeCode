const isMatch = require('./0010_regular-expression-matching');
const assert = require('power-assert');

describe('010_regular-expression-matching', () => {
    it('010_regular-expression-matching', () => {
        const obj = {
            str: "ab",
            result: ".*c"
        }

        const result = isMatch(obj.str, obj.result)
        assert.equal(result, true)
    })
});