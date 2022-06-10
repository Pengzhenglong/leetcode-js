/*
 * @lc app=leetcode.cn id=977 lang=javascript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 暴力解法
// var sortedSquares = function (nums) {
//   const newArray = nums.map(item => item * item)
//   newArray.sort((a, b) => a - b)
//   return newArray
// };
// 双指针法
var sortedSquares = function (nums) {
  let left = 0; let right = nums.length - 1;
  let result = [];
  while (left <= right) {
    if (nums[left] * nums[left] > nums[right] * nums[right]) {
      result.unshift(nums[left] * nums[left])
      left++
    } else {
      result.unshift(nums[right] * nums[right])
      right--
    }
  }
  return result;
};
// @lc code=end

// nums[i]**nums[i] === nums[i]**2