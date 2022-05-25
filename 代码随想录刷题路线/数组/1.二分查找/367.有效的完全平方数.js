/*
 * @lc app=leetcode.cn id=367 lang=javascript
 *
 * [367] 有效的完全平方数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
// 法一：暴力法
//  const x = Math.floor(Math.sqrt(num));
//   return x * x === num
var isPerfectSquare = function (num) {
  //  二分法
  // 因为我们在移动左侧边界left 和右侧边界 right 时，新的搜索区间都不会包含被检查的下标 {mid}mid，所以搜索区间的边界始终是我们没有检查过的。因此，当{left} = {right}left=right 时，我们仍需要检查 {mid} = ({left}+{right}) /2


  let left = 0, right = num;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (mid * mid === num) {
      return true;
    } else if (mid * mid < num) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  };
  return false;
}
// @lc code=end

