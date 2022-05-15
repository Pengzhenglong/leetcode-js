/*
 * @lc app=leetcode.cn id=453 lang=javascript
 *
 * [453] 最小操作次数使数组元素相等
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 题目中说的每次操作将会使 n - 1 个元素增加 1，可以联想到，这其实就是每次将一个元素减1
// 那么为了让每个元素相等，最后必然会减到最小的那个元素的值
// 所以只需要计算出每个元素减到最小元素的值的次数，再求和就是最终答案
// var minMoves = function (nums) {
//   nums.sort((a, b) => a - b)
//   let res = 0
//   for(let i = 0; i < nums.length; i++) {
//     res += nums[i] - nums[0]
//   }
//   return  res
// };
// 法二
var minMoves = function (nums) {
  let min = Math.min(...nums)
  return nums.reduce((total, current) => total + current - min, 0)
};
// @lc code=end

