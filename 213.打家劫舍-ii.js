/*
 * @lc app=leetcode.cn id=213 lang=javascript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  const len = nums.length;
  if (len < 2) {
    return nums[0]
  }
  const lArr = nums.slice(0, len - 1);
  const rArr = nums.slice(1);
  return Math.max(subRob(lArr), subRob(rArr));

};

var subRob = function(nums) {
  const len = nums.length;
  let result = [];
  let temp = 0;
  for (let i = 0; i < len; i++) {
    if (i >= 2) {
      temp = 0;
      for (let j = i - 2; j >= 0; j--) {
        if (result[j] > temp) {
          temp = result[j];
        }
      }
      result[i] = temp + nums[i];
    } else {
      result[i] = nums[i];
    }
  }
  return result.sort((a, b) => b - a)[0]
}
// @lc code=end

