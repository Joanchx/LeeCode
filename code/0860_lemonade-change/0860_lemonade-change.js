/**
 * @date 2019-06-21
 * https://leetcode.com/problems/lemonade-change/
 *
 * At a lemonade stand, each lemonade costs $5.
 * Customers are standing in a queue to buy from you, and order one at a time (in the order specified by bills).
 * Each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill.  You must provide the correct change to each customer, so that the net transaction is that the customer pays $5.
 * Note that you don't have any change in hand at first.
 * Return true if and only if you can provide every customer with correct change.
 *
 *
 *
 *
 * Input: [5,5,5,10,20]
 * Output: true
 * Explanation:
 * From the first 3 customers, we collect three $5 bills in order.
 * From the fourth customer, we collect a $10 bill and give back a $5.
 * From the fifth customer, we give a $10 bill and a $5 bill.
 * Since all customers got correct change, we output true.
 *
 *
 *
 * Note：
 *  通过判断是否有适合的组合找钱；
 *  没有便买不到快乐柠檬水啦【return false】
 * 
 *  */


/**
* @param {number[]} bills
* @return {boolean}
*/


var lemonadeChange = function (bills) {
    // f:五元
    // t:十元
    let f = 0, t = 0;
    const len = bills.length;
    for (let i = 0; i < len; i++) {
        switch (bills[i]) {
            case 5:
                f++;
                break;
            case 10:
                if (!f) return false;
                f--;
                t++;
                break;
            case 20:
                if (f && t) {
                    t--;
                    f--;
                } else if (f >= 3) {
                    f -= 3;
                } else {
                    return false;
                }
                break;
            default:
                break;
        }
    }
    return true;
};

module.exports = lemonadeChange;
