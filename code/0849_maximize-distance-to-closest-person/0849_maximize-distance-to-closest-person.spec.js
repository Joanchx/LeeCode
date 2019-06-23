
const maxDistToClosest = require('./0849_maximize-distance-to-closest-person');
const assert = require('power-assert');

describe('0849_maximize-distance-to-closest-person', () => {
    it('0849_maximize-distance-to-closest-person', () => {
        const obj = {
            numArray: [1,0,0,0]
        }

        const result = maxDistToClosest(obj.numArray)
        assert.equal(result, 3)
    })
});