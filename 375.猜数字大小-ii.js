/*
 * @lc app=leetcode.cn id=375 lang=javascript
 *
 * [375] 猜数字大小 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var getMoneyAmount = function(n) {
  let result = [0];
  for (let i = 1; i <= n; i++) {
    if (i > 1) {
      result[i] = result[i - 1] + i;
    } else {
      result[i] = 0
    }
  }
  return result[n];
};
// @lc code=end

