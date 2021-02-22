/**
 * @date 2021-02-21
 * https://leetcode-cn.com/problems/reverse-integer
 * --------------------------------------------------------------------------------------------------------
 *  Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
 *
 *  Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
 *
 * Example:
 * Input: x = 123
 * Output: 321
 *
 * --------------------------------------------------------------------------------------------------------
 *
 * 解题思路：
 * 方式一：
 *      1、字符串逆转
 *
 * 方式二：
 *      1、原地交换
 *
 * 方式三：
 *      1、数学思维（取模）
 *  */

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
	// 正负
	const sign = x > 0 ? 1 : -1;

	var array = Math.abs(x).toString().split('');
	var result = new Array(array.length);
	var len = array.length;

	for (var i = 0; i < len; i++) {
		result[i] = array[len - 1 - i];
	}
	const number = result.join('');
	if (number < -Math.pow(2, 31) || number > Math.pow(2, 31) - 1) {
		return 0;
	}
	return sign * number;
};

//方式二
var reverse = function (x) {
	// 正负
	const sign = x > 0 ? 1 : -1;
	var array = Math.abs(x).toString().split('');

	var result = new Array(array.length);
	var len = array.length;
	for (var i = 0; i <= len / 2; i++) {
		const tmp = array[i];
		result[i] = array[len - 1 - i];
		result[len - 1 - i] = tmp;
	}

	const number = result.join('');
	if (number < -Math.pow(2, 31) || number > Math.pow(2, 31) - 1) {
		return 0;
	}
	return sign * number;
};

//方式三
var reverse = function (x) {
	var result = '';
	while (x !== x % 10) {
		console.log();
		result = result * 10 + (x % 10);
		x = parseInt(x / 10);
	}
	result = result * 10 + x;
	if (result < -Math.pow(2, 31) || result > Math.pow(2, 31) - 1) {
		return 0;
	}
	return result;
};

module.exports = reverse;
