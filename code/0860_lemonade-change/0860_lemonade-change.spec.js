const lemonadeChange = require('./0860_lemonade-change');
const assert = require('power-assert');

describe('0860_lemonade-change', () => {
    it('0860_lemonade-change', () => {
        const obj = {
            numArray: [5,5,5,10,5,5,10,20,20,20]
        }

        const result = lemonadeChange(obj.numArray)
        assert.equal(result, false)
    })
});

