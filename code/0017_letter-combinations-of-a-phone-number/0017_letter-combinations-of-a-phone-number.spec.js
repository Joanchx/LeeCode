

const letterCombinations = require('./0017_letter-combinations-of-a-phone-number');
const assert = require('power-assert');

describe('0017_letter-combinations-of-a-phone-number.spec', () => {
    it('0017_letter-combinations-of-a-phone-number.spec', () => {
        const obj = {
            string: "234"
        }

        const result = letterCombinations(obj.string)
        const array = ["adg","adh","adi","aeg","aeh","aei","afg","afh","afi","bdg","bdh","bdi","beg","beh","bei","bfg","bfh","bfi","cdg","cdh","cdi","ceg","ceh","cei","cfg","cfh","cfi"]
        assert.deepEqual(result,array)
    })
});