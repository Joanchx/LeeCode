/**
 * @date 2019-07-03
 * https://leetcode.com/problems/add-digits/
 * ---------------------------------------------------------------------------------------------------------
 * Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.
 * Example:
 * Input: 38
 * Output: 2 
 * Explanation: The process is like: 3 + 8 = 11, 1 + 1 = 2. 
 * Since 2 has only one digit, return it.
 *
 * Follow up:
 * Could you do it without any loop/recursion in O(1) runtime?
 * ---------------------------------------------------------------------------------------------------------
 * 解题思路：
 *  1、当n == 0时，则为0;
 *  2、当n > 0时，则为n/9取余数;
 *      假设一个三位数abc, 100a + 10b + c = n  
 *      n -（a + b + c ）=  99a + 9b  = 9（ 11a + b ）
 *      由此得出每次各为求和与n相比均为减少9的倍数,so,n对9取余为所求结果。
 *  */


/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
    return !num ? 0 : num % 9 ? num % 9 : 9
}

module.exports = addDigits;


// var addDigits = function (num) {
//     let resule = 0;
//     while (num > 9) {
//         let current = 0;
//         const numString = num.toString()
//         const len = numString.length;
//         for (let i = 0; i < len; i++) {
//             current += parseInt(numString[i]);
//         }
//         num = parseInt(current)
//         resule = current
//     }
//     return resule;
// };