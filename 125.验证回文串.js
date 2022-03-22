/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  //  去除异常的字符，先全部转成小写
  const str = s.toLocaleLowerCase().replace(/[\W_]/ig, '')
  const length = str.length
  const midIndex = Math.floor(length / 2)
  for (let i = 0; i < midIndex; i++) {
    if (str[i] !== str[length - i - 1]) {
      return false
    }
  }
  return true
};
// @lc code=end

