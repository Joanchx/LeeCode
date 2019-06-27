/**
 * @date 2019-06-27
 * https://leetcode.com/problems/remove-element/
 * 
 * Given an array nums and a value val, remove all instances of that value in-place and return the new length.
 * 
 * Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
 * 
 * The order of elements can be changed. It doesn't matter what you leave beyond the new length.
 *  Example:
 * Given nums = [3,2,2,3], val = 3,
 * 
 * Your function should return length = 2, with the first two elements of nums being 2.
 * 
 * It doesn't matter what you leave beyond the returned length.
 * 
 * 
 * 
 * 解题思路：
 * 1、定义一个变量，遍历数组中不为目标值的元素。
 * 2、变量+1，且替换当前下标元素。
 *  */


/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let i = 0;
    nums.forEach(item => {
        if (item !== val) {
            nums[i] = item;
            i++;
        }
    })
    return i
};

module.exports = removeElement;