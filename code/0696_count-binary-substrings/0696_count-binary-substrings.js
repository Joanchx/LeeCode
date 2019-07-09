/**
 * @date 2019-07-08
 * https://leetcode.com/problems/count-binary-substrings/
 * --------------------------------------------------------------------------------------------------------
 * Give a string s, count the number of non-empty (contiguous) substrings that have the same number of 0's and 1's, and all the 0's and all the 1's in these substrings are grouped consecutively.
 * 
 * Substrings that occur multiple times are counted the number of times they occur.
 * 
 * Example 1:
 * Input: "00110011"
 * Output: 6
 * Explanation: There are 6 substrings that have equal number of consecutive 1's and 0's: "0011", "01", "1100", "10", "0011", and "01".
 * 
 * Notice that some of these substrings repeat and are counted the number of times they occur.
 * 
 * Also, "00110011" is not a valid substring because all the 0's (and 1's) are not grouped together.
 * Example 2:
 * Input: "10101"
 * Output: 4
 * Explanation: There are 4 substrings: "10", "01", "10", "01" that have equal number of consecutive 1's and 0's.
 * Note:
 * 
 * s.length will be between 1 and 50,000.
 * s will only consist of "0" or "1" characters.
 * --------------------------------------------------------------------------------------------------------
 * 解题思路：
 * 方法一：（效率较低）
 *      1、观察规律
 *          0 0 1 1 0 0 1 1    0011
 *          0 0 1 1 0 0 1 1    01
 *          0 0 1 1 0 0 1 1    1100
 *          ...                ...
 *          从第n位开始查找
 * 
 *      2、遍历查找出是否与结果相匹配；
 * 
 * --------------------------------------------------------------------------------------------------------
 * 异或运算法则：
 *      两位不同，结果为“1”，否则为0 
 *  */

/**
* @param {string} s
* @return {number}
*/
var countBinarySubstrings = function (s) {
    let count = 0;
    const match = (str) => {
        const r = str.match(/(0+|1+)/)[0];
        const o = (r[0] ^ 1).toString().repeat(r.length)
        const q = r + o;
        return str.startsWith(q) ? true : false
    }

    const len = s.length - 1;
    for (var i = 0; i < len; i++) {
        var sub = match(s.slice(i));
        sub && (count++);
    }
    return count
};
module.exports = countBinarySubstrings;