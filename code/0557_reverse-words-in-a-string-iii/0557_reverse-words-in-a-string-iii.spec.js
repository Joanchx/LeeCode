
const reverseWords = require('./0557_reverse-words-in-a-string-iii');
const assert = require('power-assert');

describe('0557_reverse-words-in-a-string-iii', () => {
    it('0557_reverse-words-in-a-string-iii', () => {
        const obj = {
            string: "Let's take LeetCode contest"
        }

        const result = reverseWords(obj.string)
        assert.equal(result, "s'teL ekat edoCteeL tsetnoc")
    })
});