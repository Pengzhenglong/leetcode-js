// 三数之和
// Category	Difficulty	Likes	Dislikes
// algorithms	Medium(33.99 %)	4054 -
//   Tags
// Companies
// 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。

// 注意：答案中不可以包含重复的三元组。

// 示例 1：

// 输入：nums = [-1, 0, 1, 2, -1, -4]
// 输出：[[-1, -1, 2], [-1, 0, 1]]
// 示例 2：

// 输入：nums = []
// 输出：[]
// 示例 3：

// 输入：nums = [0]
// 输出：[]

/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// 去重（当前数字等于前一个数字则跳出循环）
// if (i === 0 || nums[i] !== nums[i - 1]) 
// 如果不加这个判断则输出为：有重复的数组
// Finished
// Your Input
// [-1,0,1,2,-1,-4]
// Output (64 ms)
// [[-1,-1,2],[-1,0,1],[-1,0,1]]
// Expected Answer
// [[-1,-1,2],[-1,0,1]]
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const result = [];
  // 对数组进行升序排序
  nums.sort(function (a, b) {
    return a - b;
  })
  for (let i = 0; i < nums.length - 2; i++) {
    // 去重（当前数字等于前一个数字则跳出循环）
    if (i === 0 || nums[i] !== nums[i - 1]) {
      let start = i + 1; end = nums.length - 1;
      while (start < end) {
        if (nums[i] + nums[start] + nums[end] === 0) {
          // push到数组中
          result.push([nums[i], nums[start], nums[end]]);
          start++;
          end--;
          // 去重
          while (start < end && nums[start] === nums[start - 1]) {
            start++;
          }
          while (start < end && nums[end] === nums[end + 1]) {
            end--;
          }
        } else if (nums[i] + nums[start] + nums[end] < 0) {
          start++
        } else {
          end--;
        }
      }
    }
  }
  return result;
};
// @lc code=end

