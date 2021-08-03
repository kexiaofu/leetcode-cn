/*
 * @lc app=leetcode.cn id=740 lang=javascript
 *
 * [740] 删除并获得点数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
  let arr = [];
  nums.forEach(n => {
    if (arr[n] === undefined) {
      arr[n] = 1;
    } else {
      arr[n] += 1;
    }
  })
  for (let i = arr.length - 1; i >= 0; i--) {
    if  (arr[i] === undefined) {
      arr[i] = 0;
    }
  }

  return rob(arr);
};

const rob = (arr) => {
  let n = arr.length;
  let result = [];
  let temp = 0;
  for (let i = 0; i < n; i++) {
    if (i < 3) {
      result[i] = arr[i] * i;
    }
    for (let j = i - 2; j >= 0; j--) {
      temp = Math.max(temp, result[j]);
    }
    result[i] = temp + arr[i] * i;
  }
  return result.sort((a,b) => b-a)[0]
}
// @lc code=end

