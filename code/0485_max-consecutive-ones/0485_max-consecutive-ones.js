/**
 * @date 2019-06-27
 * https://leetcode.com/problems/max-consecutive-ones/
 * 
 * Given a binary array, find the maximum number of consecutive 1s in this array.
 * 
 *  Example:
 * Input: [1,1,0,1,1,1]
 * Output: 3
 * Explanation: The first two digits or the last three digits are consecutive 1s.
 * The maximum number of consecutive 1s is 3.
 * 
 * 
 * 
 * 解题思路：
 * 1、判断连续元素是1的个数，比较最大值。
 * 
 *  */

/**
* @param {number[]} nums
* @return {number}
*/

var findMaxConsecutiveOnes = function (nums) {
    const len = nums.length;
    let max = 0, count = 0;
    for (let i = 0; i < len; i++) {
        if (nums[i]) {
            //如果上一个元素存在且相等则+1，否则则是1
            nums[i - 1] && (nums[i - 1] === nums[i]) ? count++ : count = 1
        } else {
            max = Math.max(max, count);
            count = 0;
        }
    }
    return Math.max(max, count)
};

module.exports = findMaxConsecutiveOnes
