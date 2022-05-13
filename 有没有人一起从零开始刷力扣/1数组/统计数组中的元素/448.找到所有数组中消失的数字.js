/*
 * @lc app=leetcode.cn id=448 lang=javascript
 *
 * [448] 找到所有数组中消失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */

//  方法一：
//  遍历数组，如果遍历到值，则将对于下标的数改为负数，
//  当遍历完成后，查看所有非负数的下标，就是没有出现过的值
var findDisappearedNumbers = function (nums) {
  const set = new Set(nums);
  const final = []
  for (let i = 1; i <= nums.length; i++) {
    if (set.has(i) === false) final.push(i)
  }
  return final
};

var findDisappearedNumbers = function (nums) {
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    let index = Math.abs(nums[i]) - 1;
    if (nums[index] > 0) {
      nums[index] = -nums[index];
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      res.push(i + 1);
    }
  }
  return res;
};
// @lc code=end

