/**
 * @date 2019-07-09
 * https://leetcode.com/problems/letter-combinations-of-a-phone-number/
 * --------------------------------------------------------------------------------------------------------
 * Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.
 * 
 * A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
 * Example:
 * 
 * Input: "23"
 * Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 --------------------------------------------------------------------------------------------------------
 * 解题思路：
    1、先把数字转化为数组
    2、递归两两配对
 *  */

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {

    const map = ['', 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
    const num = digits.split('');
    const code = num.map(item => map[item])
    if (!code.length) { return [] }

    if (code.length < 2) { return code[0].split('') }

    const comb = (arr) => {
        //存储当前数组前两个组合结果
        let tmp = [];
        const len = arr[0].length;
        for (let i = 0; i < len; i++) {
            const len2 = arr[1].length;
            for (let j = 0; j < len2; j++) {
                tmp.push(`${arr[0][i]}${arr[1][j]}`)
            }
        }

        //替换
        arr.splice(0, 2, tmp);
        if (arr.length > 1) {
            comb(arr)
        } else {
            return tmp
        }
        return arr[0]
    }
    return comb(code);
};

module.exports = letterCombinations;