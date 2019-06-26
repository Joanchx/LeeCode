/**
 * @date 2019-06-26
 * https://leetcode.com/problems/sort-array-by-parity/
 * 
 * Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.
 * You may return any answer array that satisfies this condition.
 * 
 *  Example:
 * Input: [3,1,2,4]
 * Output: [2,4,3,1]
 * The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
 * 
 * 
 * 
 * 解题思路：
 * 方法一：
 *      1、分奇数、偶数组
 *      2、合并数组
 * 
 * 方法二：
 *      1、双指针；符合条件交换位置，直至排序完毕
 * 
 *  */

/**
* @param {number[]} A
* @return {number[]}
*/
var sortArrayByParity = function (A) {
    const odd = [], even = [];
    A.forEach(item => {
        item % 2 ? odd.push(item) : even.push(item)
    })
    return [...even, ...odd]

};

var sortArrayByParity2 = function (A) {
    let a = 0, b = A.length - 1;

    while (a < b) {
        if (A[a] % 2) {
            a++;
        } else {
            const old_B = A[b];
            A[b] = A[a];
            A[a] = old_B;
            b--;
        }
    }
    return A
}

module.exports = sortArrayByParity;
