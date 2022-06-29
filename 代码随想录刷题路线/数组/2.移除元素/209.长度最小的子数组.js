/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
// 暴力解法，双重for循环
// var minSubArrayLen = function (target, nums) {
//   const length = nums.length;
//   let ans = Number.MAX_VALUE;
//   for (let i = 0; i < length; i++) {
//     let sum = 0;
//     for (let j = i; j < length; j++) {
//       sum += nums[j]
//       if (sum >= target) {
//         ans = Math.min(ans, j - i + 1)
//         break;
//       }
//     }
//   }
//   return ans === Number.MAX_VALUE ? 0 : ans;
// };

// 双指针
var minSubArrayLen = function (target, nums) {

};
// @lc code=end

