/**
 * @date 2019-06-21
 * https://leetcode.com/problems/height-checker/
 * 
 * Students are asked to stand in non-decreasing order of heights for an annual photo.
 * Return the minimum number of students not standing in the right positions.  (This is the number of students that must move in order for all students to be standing in non-decreasing order of height.)
 * 
 *  Example:
 *  Input: [1,1,4,2,1,3]
 *  Output: 3
 *  Explanation: 
 *  Students with heights 4, 3 and the last 1 are not standing in the right positions.
 * 
 * 
 * 
 * Note：
 *   1、非递减排序
 *   2、排序前数组 VS 排序后数组
 *  */

 

/**
 * @param {number[]} heights
 * @return {number}
 */


var heightChecker = function (heights) {
    let count = 0;
    const copyHeights = heights.concat([]);
    const sortHeights = copyHeights.sort((a, b) => (a - b));
    for (let i = 0; i <= sortHeights.length; i++) {
        heights[i] !== sortHeights[i] && (count += 1)
    }
    return count;
};

module.exports = heightChecker;