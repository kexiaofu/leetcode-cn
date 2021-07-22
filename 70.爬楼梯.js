/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let result = [0]
    for (let i = 1; i < n + 1; i++) {
        if (i === 1) {
            result[i] = 1;
        }
        if (i === 2) {
            result[2] = 2;
        }

        if (i > 2) {
            result[i] = result[i - 1] + result[i - 2]
        }
    }
    return result[n];
};
// @lc code=end

