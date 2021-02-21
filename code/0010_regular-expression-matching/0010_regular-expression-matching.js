/**
 * @date 2019-07-14
 * https://leetcode.com/problems/regular-expression-matching/
 * --------------------------------------------------------------------------------------------------------
 * Given an input string (s) and a pattern (p), implement regular expression matching with support for '.' and '*'.
 * 
 * '.' Matches any single character.
 * '*' Matches zero or more of the preceding element.
 * The matching should cover the entire input string (not partial).
 * 
 * Note:
 * 
 * s could be empty and contains only lowercase letters a-z.
 * p could be empty and contains only lowercase letters a-z, and characters like . or *.
 * Example 1:
 * 
 * Input:
 * s = "aa"
 * p = "a"
 * Output: false
 * Explanation: "a" does not match the entire string "aa".
 * --------------------------------------------------------------------------------------------------------
 * 
 * 解题思路：
 * 1、筛选为 有模式、无模式
 * 2、模式匹配
 * 
 * --------------------------------------------------------------------------------------------------------
 * *:匹配前一个表达式0次或多次。等价于 {0,}
 * .:（小数点）匹配除换行符之外的任何单个字符。
 * x(?=y):匹配'x'仅仅当'x'后面跟着'y'.这种叫做先行断言。(满足后面跟着y但是不会把y提出)
 *  */


/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    //筛选模式(无模式)
    const reg = /([a-z.]\*)|([a-z.]+(?=([a-z]\*|$)))/g;
    const modeArr = p.match(reg);
    if (!modeArr) {
        return false
    }
    console.log('modeArr', modeArr)
    let current = 0;
    let sLen = s.length;
    for (let i = 0, len = modeArr.length, m; i < len; i++) {
        //.*   a*   asdf .
        m = modeArr[i].split('');
        console.log('----m', m)
        //第二位如果是*，则为有模式
        if (m[1] === '*') {
            if (m[0] === '.') {
                current = sLen;
                break;
            } else {
                while (s[current] === m[0]) {
                    current++
                }
            }
        } else {
            console.log('m--->>', m)
            for (let j = 0, jl = m.length; j < jl; j++) {
                if (s[current] === m[j] || m[j] === '.') {
                    current++;
                } else {
                    return false
                }
            }
        }
    }
    console.log('current', current)
    console.log(sLen, 'sLen')
    return current === sLen
};
module.exports = isMatch;