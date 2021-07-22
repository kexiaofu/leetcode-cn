/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let result = [];
    const len = nums.length;
    let temp = 0;
    for (let i = 0; i < len; i++) {
        if (i > 1) {
            for (let j = i - 2; j >= 0; j--) {
                temp = Math.max(result[j], temp)
            }
            result[i] = temp + nums[i];
        } else {
            result[i] = nums[i]
        }
    }
    return result.sort((a,b) => a - b)[len - 1]
};
// @lc code=end

