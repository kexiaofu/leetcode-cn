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
    const numsLen = nums.length;
    const currentNums = nums.slice(1, numsLen - 1);
    const len = currentNums.length;
    let result = [];
    let temp = 0;
    let targetIndex = 0;
    if (numsLen === 1) {
        result = [currentNums[0]];
    } else {
        for (let i = 0; i < len; i++) {
            if (i > 1) {
                for (let j = i - 2; j >= 0; j--) {
                    temp = Math.max(result[j], temp);
                }
                result[i] = temp + currentNums[i];
            } else {
                result[i] = currentNums[i]
            }
        }
    }
    temp = 0;
    result.forEach((i, index) => {
        if (temp <= i) {
            temp = i;
            targetIndex = index;
        }
    })
    if (numsLen > 3) {
        if (targetIndex === 0) {
            return result[targetIndex] + nums[numsLen - 1]
        }
        if (targetIndex === len){
            return result[targetIndex] + nums[0]
        }
        if (targetIndex !== 0 && targetIndex !== len) {
            return result[targetIndex] + (nums[0] > nums[numsLen - 1] ? nums[0] : nums[numsLen - 1])
        }
    } else {
        return nums.sort((a,b) => b-a)[0]
    }
};
// @lc code=end

