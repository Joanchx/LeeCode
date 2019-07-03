const addDigits = require('./0258_add-digits');
const assert = require('power-assert');

describe('0258_add-digits', () => {
    it('0258_add-digits', () => {
        const obj = {
            number: 38
        }
        const result = addDigits(obj.number)
        assert.equal(result, 2)
    })
});