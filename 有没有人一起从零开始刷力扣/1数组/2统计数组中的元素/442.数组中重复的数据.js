/*
 * @lc app=leetcode.cn id=442 lang=javascript
 *
 * [442] 数组中重复的数据
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  // map
  let set = new Set();
  let res = []
  for (let i = 0; i < nums.length; i++) {

    if (set.has(nums[i])) {
      res.push(nums[i]);
    } else {
      set.add(nums[i]);
    }
  }
  return res;
};
// @lc code=end

