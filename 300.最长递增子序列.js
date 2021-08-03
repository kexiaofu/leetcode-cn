/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  const len = nums.length;
  let result = Array(len).fill(1);
  let maxLen = 1;
  for (let i = 1; i < len; i++) {
    for (let j = i; j >= 0; j--) {
      if (nums[j] < nums[i]) {
        result[i] = Math.max(result[i], result[j] + 1)
      }
    }
    if (maxLen < result[i]) {
      maxLen = result[i];
    }
  }
  return maxLen;
};
// @lc code=end

