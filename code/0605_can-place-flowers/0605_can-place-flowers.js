/**
 * @date 2019-06-11
 * https://leetcode.com/problems/can-place-flowers//
 * --------------------------------------------------------------------------------------------------------
 * Suppose you have a long flowerbed in which some of the plots are planted and some are not. However, flowers cannot be planted in adjacent plots - they would compete for water and both would die.
 * 
 * Given a flowerbed (represented as an array containing 0 and 1, where 0 means empty and 1 means not empty), and a number n, return if n new flowers can be planted in it without violating the no-adjacent-flowers rule.
 * 
 * Example 1:
 * Input: flowerbed = [1,0,0,0,1], n = 1
 * Output: True
 * Example 2:
 * Input: flowerbed = [1,0,0,0,1], n = 2
 * Output: False
 * Note:
 * The input array won't violate no-adjacent-flowers rule.
 * The input array size is in the range of [1, 20000].
 * n is a non-negative integer which won't exceed the input array size.
 * --------------------------------------------------------------------------------------------------------
 * 解题思路：
 * 1、排除特殊情况，
 * 2、遍历查找前后均为0的元素【考虑边界问题】，比较目标值大小
 *  */

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    //种花的棵树
    let count = 0;
    const len = flowerbed.length;
    //特殊情况【0】【0,0】
    if (len === 1 && flowerbed[0] === 0)
        return (1 >= n)

    if (len === 2 && flowerbed[0] === flowerbed[1] === 0)
        return 1 >= n

    //遍历
    for (let i = 0; i < len; i++) {
        if (flowerbed[i] === 0) {
            if (i === 0 && flowerbed[1] === 0) {
                count++;
                i += 1;
            } else if (flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) {
                count++;
                i += 1;
            } else if (i === (len - 1) && flowerbed[i - 1] === 0) {
                count++;
                i += 1;
            }
        }
    }
    return count >= n;
};

module.exports = canPlaceFlowers;