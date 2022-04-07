/*
 * @lc app=leetcode.cn id=41 lang=javascript
 *
 * [41] 缺失的第一个正数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

// 超时了
// var firstMissingPositive = function (nums) {
//   let restult = 1;
//   while (nums.includes(restult)) {
//     restult++;
//   }
//   return restult
// };


// 排序，加一次循环，
var firstMissingPositive = function (nums) {
  nums.sort(function (a, b) {
    return a - b;
  })
  let first = 1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      if (nums[i] !== nums[i + 1]) {
        if (nums[i] !== first) {
          return first;
        } else if (nums[i] === first) {
          first++;
        }
      }
    }
  }
  return first;
};
// @lc code=end

