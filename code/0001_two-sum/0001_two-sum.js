/**
 * @date 2019-06-20
 * https://leetcode.com/problems/two-sum/
 * --------------------------------------------------------------------------------------------------------
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 *  Example:
 *  Given nums = [2, 7, 11, 15], target = 9,
 *  Because nums[0] + nums[1] = 2 + 7 = 9,
 *  return [0, 1].
 * --------------------------------------------------------------------------------------------------------
 * 解题思路：遍历数组，寻找目标索引。
 *  */

/**
 *  @param {Array} nums
 *  @param {Number} target
 * */
const twoSum = function (nums, target) {
	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[i] + nums[j] == target) {
				return [i, j];
			}
		}
	}
};


/**
 *  @date 2021-05-03
 * 解题思路：
 * 1、遍历数组，将目标值存入obj中
 * 2、找到目标值则返回；
 * 【空间换时间】
 */
const twoSum = function (nums, target) {
	//存储需要的值
	const obj = {};
	for (let i = 0; i < nums.length; i++) {
		const num = nums[i];
		//找到目标值，则返回
		if (num in obj) {
			return [obj[num], i];
		} else {
			// 以目标值为key值存储当前索引
			obj[target - num] = i;
		}
	}
};

module.exports = twoSum;
