/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 快慢指针
// var moveZeroes = function (nums) {
//   let i = 0;
//   let j = 0;
//   while (j < nums.length) {
//     if (nums[j] !== 0) {
//       nums[i] = nums[j];
//       i++;
//     }
//     j++;
//   }
//   while (i < nums.length) {
//     nums[i] = 0;
//     i++;
//   }
//   return nums;
// };
// 优化
var moveZeroes = function (nums) {
  let i = 0;  //快指针
  let j = 0;  // 慢指针
  while (i < nums.length) {
    if (nums[i] != 0) {
      [nums[i], nums[j]] = [nums[j], nums[i]]
      j++;
    }
    i++;
  }
  return nums;
};
// @lc code=end

