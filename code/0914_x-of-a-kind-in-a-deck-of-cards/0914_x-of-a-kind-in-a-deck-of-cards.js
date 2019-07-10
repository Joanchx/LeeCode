/**
 * @date 2019-07-10
 * https://leetcode.com/problems/x-of-a-kind-in-a-deck-of-cards/
 * --------------------------------------------------------------------------------------------------------
 * n a deck of cards, each card has an integer written on it.
 * 
 * Return true if and only if you can choose X >= 2 such that it is possible to split the entire deck into 1 or more groups of cards, where:
 * 
 * Each group has exactly X cards.
 * All the cards in each group have the same integer.
 * Example 1:
 * 
 * Input: [1,2,3,4,4,3,2,1]
 * Output: true
 * Explanation: Possible partition [1,1],[2,2],[3,3],[4,4]
 --------------------------------------------------------------------------------------------------------
 * 解题思路：
    1、统计数组中每种数字存在的个数
    2、寻找公约数，有为true，没有为false
 *  */

/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function (deck) {

    //寻找公约数方法
    const getResult = (a, b) => {
        if (b === 0) return a;
        return getResult(b, a % b)
    }

    //统计每种数字的数目
    const hash = deck.reduce((pre, num) => {
        if (!pre[num]) {
            pre[num] = 1
        } else {
            pre[num]++
        }
        return pre
    }, {})

    const numCount = Object.values(hash)
    //获取最小值
    const min = numCount.sort((a, b) => a - b)[0];

    //根分组最小数量小于2，直接返回false
    if (min < 2) return false;

    return !numCount.some((item, index) => {
        if (index > 0) return getResult(item, min) === 1
    })
};

module.exports = hasGroupsSizeX;