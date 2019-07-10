

const hasGroupsSizeX = require('./0914_x-of-a-kind-in-a-deck-of-cards');
const assert = require('power-assert');

describe('0914_x-of-a-kind-in-a-deck-of-cards', () => {
    it('0914_x-of-a-kind-in-a-deck-of-cards', () => {
        const obj = {
            array: [1,1,1,1,2,2,2,2,2,2]
        }

        const result = hasGroupsSizeX(obj.array)
        assert.equal(result, true)
    })
});