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

// 双指针  滑动窗口
var minSubArrayLen = function (target, nums) {
  const length = nums.length;
  let l = 0, r = 0, sum = 0;
  let ans = Number.MAX_VALUE;
  while (r < length) {
    sum += nums[r]
    while (sum >= target) {
      ans = Math.min(ans, r - l + 1)
      sum -= nums[l]
      l++
    }
    r++;
  }
  return ans === Number.MAX_VALUE ? 0 : ans
};
// @lc code=end
// 时间复杂度：O(n) 空间复杂度：O(1)

// 一些录友会疑惑为什么时间复杂度是O(n)。

// 不要以为for里放一个while就以为是O(n^2)啊， 主要是看每一个元素被操作的次数，每个元素在滑动窗后进来操作一次，出去操作一次，每个元素都是被操作两次，所以时间复杂度是 2 × n 也就是O(n)。
