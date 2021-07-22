/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  const result = [];
  for (let i = 0; i < m; i++) {
    result[i] = [];
    for (let j = 0; j < n; j++) {
      if (i === 0) {
        result[0][j] = 1;
      }
      if (j === 0) {
        result[i][0] = 1;
      }
      if (i > 0 && j > 0) {
        result[i][j] = result[i - 1][j] + result[i][j - 1];
      }
    }
  }
  return result[m - 1][n - 1];
};
// @lc code=end

