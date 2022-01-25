/*
 * @lc app=leetcode.cn id=231 lang=javascript
 *
 * [231] 2 的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
// var isPowerOfTwo = function (n) {
//   if (n == 0) {
//     return false
//   }
//   if (n == 1) {
//     return true
//   }
//   while (n % 2 == 0) {
//     n = n / 2
//   }
//   // 这里在判断n是否等于1,等于1则返回true,反之返回false
//   return n == 1;



// };
// 方法二

var isPowerOfTwo = function (n) {
  if (n == 1) return true;
  let p = n;

  while (p > 2) {
    p = p / 2;
    if (p % 2 !== 0) return false;
  }
  if (p === 2) return true;
  return false  //余下情况都是false;

};


// @lc code=end

