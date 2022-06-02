/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

//  首先，题目中已经明确要求：原地修改！

//  so ~，我们必须得放弃暴破等需要多余存储空间的做法。

//  finally ~，我们就能想到双指针，解题流程如下：

//  创建一个慢指针 ii，指向数组第一位数字，再创建一个快指针 jj，指向数组第二位。
//  若 nums[j]nums[j] 和 nums[i]nums[i] 不等，则先将 ii 递增 11，然后把 nums[i]nums[i] 改为 nums[j]nums[j]。
//  因为最初 ii 等于 00 时的数字未统计，所以最终返回结果需要 +1+1。


var removeDuplicates = function (nums) {
  if (!nums.length) return 0; 
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
};
// @lc code=end

