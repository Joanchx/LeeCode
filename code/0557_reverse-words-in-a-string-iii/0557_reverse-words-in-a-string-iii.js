/**
 * @date 2019-07-07
 * https://leetcode.com/problems/reverse-words-in-a-string-iii/
 * --------------------------------------------------------------------------------------------------------
 * Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.
 * 
 * Example 1:
 * Input: "Let's take LeetCode contest"
 * Output: "s'teL ekat edoCteeL tsetnoc"
 * Note: In the string, each word is separated by single space and there will not be any extra space in the string.
 * --------------------------------------------------------------------------------------------------------
 * 解题思路： 1、字符串按空格进行分隔；
 *           2、对每个元素进行反转；
 *  */

/**
* @param {string} s
* @return {string}
*/
var reverseWords = function (s) {
    // return s.split(' ').map(item => item.split('').reverse().join('')).join(' ')
    // return s.match(/[\w']+/g).map(item => item.split('').reverse().join('')).join(' ')
    return s.split(/\s/g).map(item => item.split('').reverse().join('')).join(' ')
};

module.exports = reverseWords;