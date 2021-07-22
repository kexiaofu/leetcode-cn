/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  if (grid.length > 0) {
    const m = grid.length;
    const n = grid[0].length;
    let result = [];
    for (let i = 0; i < m; i++) {
      result[i] = [];
      for (let j = 0; j < n; j++) {
        if (i === 0 && j === 0) {
          result[0][0] = grid[0][0];
        }
        if (i === 0 && j > 0) {
          result[0][j] = result[0][j - 1] + grid[0][j];
        }
        if (j === 0 && i > 0) {
          result[i][0] = result[i - 1][0] + grid[i][0];
        }
        if (i > 0 && j > 0) {
          result[i][j] = Math.min(result[i - 1][j], result[i][j - 1]) + grid[i][j];
        }
      }
    }
    return result[m - 1][n - 1];
  }
  return 0;
};
// @lc code=end

