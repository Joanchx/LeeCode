/**
 * @date 2019-06-26
 * https://leetcode.com/problems/power-of-two/
 * 
 * Given an integer, write a function to determine if it is a power of two.
 * 
 *  Example:
 *  Input: 1
 *  Output: true 
 *  Explanation: 20 = 1
 * 
 * 
 * 
 * 解题思路：
 * 方法一：
 *      1、与2相除结果为1则是2的幂
 * 方法二：
 *      1、转化为二进制:2的幂二进制只有一个1，去掉二进制最后一个1的方法为 n &（n-1）
 *      2、如果n &（n-1）==0，则是2的幂
 *  */


/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
    if (n == 1) return true

    while (n > 1) {
        const num = n / 2
        if (num == 1)
            return true
        else
            n = num
    }

    return false;
}




var isPowerOfTwo2 = function (n) {
    if (n <= 0) return false;
    else if (n & (n - 1)) return false;
    else return true;
};

module.exports = isPowerOfTwo;