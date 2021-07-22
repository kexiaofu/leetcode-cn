/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 * 两边收缩
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  const len = s.length;
  let tempLen = 0;
  let result = s[0];
  let tempIndex = 0;
  for (let i = 0; i < len; i++) {
    for (let j = len - 1; j >= i; j--) {
      if (s[i] === s[j] && j - i >= result.length) {
        console.log(i, j);
        tempLen = j - i;
        tempIndex = 1;
        while (tempLen--) {
          if (tempLen < 1) {
            result = s.substring(i, j + 1);
          } else if (s[i + tempIndex] === s[j - tempIndex]) {
            tempIndex++;
          } else {
            tempLen = 0;
          }
        }
      }
    }
  }

  return result;
};

console.log(longestPalindrome('aaaaa'))
// @lc code=end

