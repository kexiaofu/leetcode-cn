/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  if (obstacleGrid.length > 0) {
    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;
    let result = [];
    let obstacleRow = -1;
    let obstacleCol = -1;
    for (let i = 0; i < m; i++) {
      result[i] = [];
      for (let j = 0; j < n; j++) {
        if (i === 0) {
          result[0][j] = 1;
        }
        if (j === 0) {
          result[i][0] = 1;
        }
        if (obstacleGrid[i][j] === 1 && i === 0) {
          obstacleRow = j;
        }
        if (obstacleGrid[i][j] === 1 && j === 0) {
          obstacleCol = i;
        }
        if (obstacleRow !== -1 && j >= obstacleRow) {
          result[0][j] = 0;
        }
        if (obstacleCol !== -1 && i >= obstacleCol) {
          result[i][0] = 0;
        }
        if (i > 0 && j > 0) {
          if (obstacleGrid[i][j] !== 1) {
            result[i][j] = result[i - 1][j] + result[i][j - 1];
          } else {
            result[i][j] = 0;
          }
        }
      }
    }
    result;
    return result[m - 1][n - 1];
  }
  return 0;
};
// @lc code=end
