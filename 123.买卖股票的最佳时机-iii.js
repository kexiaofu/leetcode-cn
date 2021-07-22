/*
 * @lc app=leetcode.cn id=123 lang=javascript
 *
 * [123] 买卖股票的最佳时机 III
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let len = prices.length;
  const min = 2;
  let sell = []; 
  let buy =  [];
  for(let i = 0, _len = min + 1; i < _len; i++) {
    sell.push(0);
    buy.push(-Infinity);
  }
  for (let i = 0; i < len; i++) {
    for (let k = 1; k < min + 1; k++) {
      buy[k] = Math.max(buy[k], sell[k - 1] - prices[i]);
      sell[k] = Math.max(sell[k], buy[k] + prices[i])
    }
  }
  return sell[sell.length - 1];
};
// @lc code=end

