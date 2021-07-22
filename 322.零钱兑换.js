/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  let result = Array(amount + 1).fill(Infinity);
  result[0] = 0;
  for (let i = 0, len = coins.length; i < len; i++) {
    for (let j = 1; j < amount + 1; j++) {
      if (coins[i] <= j) {
        // why ?
        result[j] = Math.min(result[j], result[j - coins[i]] + 1)
      }
      // console.log(result)
    }
  }
  return result[amount] !== Infinity ? result[amount] : -1

};
// @lc code=end

