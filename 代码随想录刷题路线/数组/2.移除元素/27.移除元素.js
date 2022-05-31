/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// 双指针法
// var removeElement = function (nums, val) {
//   var newIndex = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== val) {
//       nums[newIndex] = nums[i]
//       newIndex++
//     }
//   }
//   return newIndex;
// };
// 暴力解法1  双重for循环
var removeElement = function (nums, val) {
  let n = nums.length
  for (let i = 0; i < n; i++) {
    if (nums[i] === val) {
      for (let j = i; j < n; j++) {
        nums[j] = nums[j + 1]
      }
      n--
      i--
    }
  }
  return n
}
// 暴力解法
// var removeElement = function (nums, val) {
//   let n = nums.length
//   for (let i = 0; i < n; i++) {
//     if (nums[i] === val) {
//       nums.splice(i, 1)
//       i--
//       n--
//     }
//   }
//   return n
// }
// @lc code=end

