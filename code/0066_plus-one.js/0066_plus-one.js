/**
 * @date 2019-06-22
 * https://leetcode.com/problems/plus-one/
 *
 *
 *Given a non-empty array of digits representing a non-negative integer, plus one to the integer.
 *The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.
 *You may assume the integer does not contain any leading zero, except the number 0 itself.
 *
 *
 *Input: [1,2,3]
 *Output: [1,2,4]
 *Explanation: The array represents the integer 123.
 *
 *
 * 解题思路：
 * 最后一位加一;
 * 如果余数为0.则往前一位加一,以此类推
 * 
 *
 *  */

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    const len = digits.length - 1;
    for (let i = len; i >= 0; i--) {
        digits[i]++;
        digits[i] %= 10;
        if (digits[i]) return digits
    }
    return [...[1], ...digits]
};
module.exports = plusOne;