/**
 * @date 2019-06-26
 * https://leetcode.com/problems/combination-sum/
 * --------------------------------------------------------------------------------------------------------
 * Given a set of candidate numbers (candidates) (without duplicates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.
 * The same repeated number may be chosen from candidates unlimited number of times.
 * 
 *  Example:
 * Input: candidates = [2,3,6,7], target = 7,
 * A solution set is:
 * [ [7], [2,2,3] ]
 * --------------------------------------------------------------------------------------------------------
 * 解题思路：
 *  1、数组去重/排序;
 *  2、递归查找相机刚好为target的数组，push到目标数组中;
 *  
 *                   2                 |       3                     |      6             |     7
 *                                  
 *       2       3       6       7     |      3      6       7       |     6      7       |     7   
 *              
 *  */


/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    const array = [...new Set(candidates)];
    array.sort((a, b) => a - b);

    let results = [], indexs = [];


    const add = (array, target, indexs, results, num) => {
        if (target < 0) {
            return;
        }
        //匹配成功
        if (target === 0) {
            //#todo#
            indexs = indexs.slice();
            results.push(indexs);
            return;
        }

        for (let i = num; i < array.length; i++) {
            indexs.push(array[i]);
            const _target = target - array[i];
            add(array, _target, indexs, results, i);
            //为不影响其他项的循环
            indexs.pop();
        }
    }
    add(array, target, indexs, results, 0);
    return results
};

module.exports = combinationSum;