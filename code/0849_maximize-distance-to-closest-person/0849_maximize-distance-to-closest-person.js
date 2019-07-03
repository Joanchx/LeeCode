/**
 * @date 2019-06-23
 * https://leetcode.com/problems/maximize-distance-to-closest-person/
 * --------------------------------------------------------------------------------------------------------
 * 
 * In a row of seats, 1 represents a person sitting in that seat, and 0 represents that the seat is empty. 
 * There is at least one empty seat, and at least one person sitting.
 * Alex wants to sit in the seat such that the distance between him and the closest person to him is maximized. 
 * Return that maximum distance to closest person.
 *  
 * Example:
 * Input: [1,0,0,0,1,0,1]
 * Output: 2
 * Explanation: 
 * If Alex sits in the second open seat (seats[2]), then the closest person has distance 2.
 * If Alex sits in any other open seat, the closest person has distance 1.
 * Thus, the maximum distance to the closest person is 2.
 * 
 * --------------------------------------------------------------------------------------------------------
 * 
 * 解题思路：
 * 1、循环便利数组，当前元素的前n个与后n个元素均不为1时，最远距离增加1
 * 2、比较每个元素的最大距离值，返回最大目标
 *  */

/**
 * @param {number[]} seats
 * @return {number}
 */


var maxDistToClosest = function (seats) {
    const len = seats.length;
    let max = 0;
    for (let i = 0; i < len; i++) {
        if (!seats[i]) {
            let j = 0;
            while (seats[i - j] !== 1 && seats[i + j] !== 1) {
                j++
            }
            max = Math.max(j, max)
        }
    }
    return max
}

module.exports = maxDistToClosest;



//
/**
 * 
 * 效率很低很低很低！ 解题思路：
 * 1、将数组分为0跟1的数组；
 * 2、循环查找当前元素最小值，比较返回最大目标值
 * 
 *  */


// var maxDistToClosest = function (seats) {
//     const Alex = [], Person = [];
//     seats.forEach((item, index) => {
//         item ? Person.push(index) : Alex.push(index);
//     })

//     let max = 0;
//     Alex.forEach(index => {
//         let m;
//         Person.forEach(i => {
//             const d = Math.abs(index - i)
//             if (!m) {
//                 m = d;
//             } else if (m > d) {
//                 m = d;
//             }
//         })
//         max = Math.max(m, max)
//     })

//     return max
// };