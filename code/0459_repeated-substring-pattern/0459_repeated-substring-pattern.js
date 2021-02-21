/**
 * @date 2019-07-14
 * https://leetcode.com/problems/repeated-substring-pattern/
 * --------------------------------------------------------------------------------------------------------
 * Given a non-empty string check if it can be constructed by taking a substring of it and appending multiple copies of the substring together. You may assume the given string consists of lowercase English letters only and its length will not exceed 10000.
 * 
 * Example 1:
 * 
 * Input: "abab"
 * Output: True
 * Explanation: It's the substring "ab" twice.
 * Example 2:
 * 
 * Input: "aba"
 * Output: False
 * Example 3:
 * 
 * Input: "abcabcabcabc"
 * Output: True
 * Explanation: It's the substring "abc" four times. (And the substring "abcabc" twice.)
 * --------------------------------------------------------------------------------------------------------
 * 
 * 解题思路：
 * 1、正则匹配（模式匹配）
 *      参考：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions
 * 2、返回结果
 *  */


/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
    const reg = /^(\w+)\1+$/;
    return reg.test(s);
}
module.exports = repeatedSubstringPattern;