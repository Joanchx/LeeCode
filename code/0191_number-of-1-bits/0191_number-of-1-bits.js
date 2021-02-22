/**
 * @date 2021-02-22
 * https://leetcode-cn.com/problems/number-of-1-bits/
 * --------------------------------------------------------------------------------------------------------
 * Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).
 *
 * Note:
 *
 * Note that in some languages such as Java, there is no unsigned integer type. In this case, the input will be given as a signed integer type. It should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.
 * In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 3, the input represents the signed integer. -3.
 * 。
 *
 * Example:
 * Input: n = 00000000000000000000000000001011
 * Output: 3
 * Explanation: The input binary string 00000000000000000000000000001011 has a total of three '1' bits.
 *
 * --------------------------------------------------------------------------------------------------------
 *
 * 解题思路：
 * 方式一：
 *      1、获取为1的字符长度
 *
 * 方式二：
 *      1、正则
 *
 *  */

/**
 * @param {number} n - a positive integer
 * @return {number}
 */

// 方式一:
var hammingWeight = function (n) {
	//十进制转二进制
	var num = n.toString(2);
	var array = num.split('');
	var result = array.filter(x => x === '1');
	return result.length;
};

// 方式二：
var hammingWeight = function (n) {
	//十进制转二进制
	var num = n.toString(2);
	return num.replace(/0/g, '').length;
};

module.exports = hammingWeight;
