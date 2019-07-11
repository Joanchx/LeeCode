
const canPlaceFlowers = require('./0605_can-place-flowers');
const assert = require('power-assert');

describe('0605_can-place-flowers', () => {
    it('0605_can-place-flowers', () => {
        const obj = {
            numArray: [1, 0, 0, 0, 1],
            target: 2
        }

        const result = canPlaceFlowers(obj.numArray, obj.target)
        assert.equal(result, false)
    })
});