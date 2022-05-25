/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根 
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x === 0) return 0;
  if (x === 1) return 1;
  let left = 0, right = x;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (mid * mid > x) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left - 1;
};
// @lc code=end

