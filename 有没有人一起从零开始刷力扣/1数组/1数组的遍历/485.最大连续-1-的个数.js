/*
 * @lc app=leetcode.cn id=485 lang=javascript
 *
 * [485] 最大连续 1 的个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let maxCount = 0, count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count++;
    } else {
      maxCount = Math.max(maxCount, count);
      count = 0;
    }
  }
  return maxCount = Math.max(maxCount, count);
};
// @lc code=end
// 复杂度分析
// 时间复杂度：O(n)O(n)，其中 nn 是数组的长度。需要遍历数组一次。
// 空间复杂度：O(1)O(1)。
// reduce解法
let findMaxConsecutiveOnes = function (nums) {
  let maxCount = 0;
  nums.reduce((total, curr) => {
    if (curr === 1) {
      total++;
    } else {
      total = 0;
    }
    if (total > maxCount) {
      maxCount = total;
    }
    return total;
  }, 0)
  return maxCount
}
