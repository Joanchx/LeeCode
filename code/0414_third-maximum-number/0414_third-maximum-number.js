/**
 * @date 2019-06-23
 * https://leetcode.com/problems/third-maximum-number/
 * --------------------------------------------------------------------------------------------------------
 * Given a non-empty array of integers, return the third maximum number in this array. If it does not exist, return the maximum number. The time complexity must be in O(n).
 *  
 * Example:
 * Input: [3, 2, 1]
 * Output: 1
 * Explanation: The third maximum is 1.
 * --------------------------------------------------------------------------------------------------------
 * 
 * 解题思路：
 * 1、去重
 * 2、通过索引找到目标值
 *  */


/**
 * @param {number[]} nums
 * @return {number}
 */

var thirdMax = function (nums) {
    const array = [...new Set(nums)];
    array.sort((a, b) => b - a);
    return array.length >= 3 ? array[2] : array[0]
};

module.exports = thirdMax;