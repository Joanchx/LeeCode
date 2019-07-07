/**
 * @date 2019-07-08
 * https://leetcode.com/problems/reverse-words-in-a-string-iii/
 * --------------------------------------------------------------------------------------------------------
 * Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.
 * 
 * Example 1:
 * Input: "Let's take LeetCode contest"
 * Output: "s'teL ekat edoCteeL tsetnoc"
 * Note: In the string, each word is separated by single space and there will not be any extra space in the string.
 * --------------------------------------------------------------------------------------------------------
 * 解题思路：遍历数组，寻找目标索引。
 *  */

/**
* @param {string} s
* @return {string}
*/
var reverseWords = function (s) {
    const array = s.split(' ')
    const r = array.map(item => item.split('').reverse().join(''))
    return r.join(' ')
};

module.exports = reverseWords;