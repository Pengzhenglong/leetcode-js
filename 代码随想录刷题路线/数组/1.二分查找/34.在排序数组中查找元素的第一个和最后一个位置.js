/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//  方法1:先二分，在寻找左右边界
//  思路：二分查找，然后向左和向右尝试找相同的元素
//  复杂度：时间复杂度O(n)，空间复杂度O(1)
//nums = [5,7,7,8,8,10], target = 8

// 一行代码解决
// return [nums.indexOf(target), nums.lastIndexOf(target)]

// let left = 0,right = nums.length - 1, mid;
// while (left <= right) {
//   //二分查找target
//   mid = Math.floor((left + right) /2);
//   if (nums[mid] === target) break;
//   if (nums[mid] > target) right = mid -1;
//   else left = mid + 1;

// }
// if (left > right) {
//   return [-1, -1]
// }
// let i = mid, j = mid;
// while (nums[i] === nums[i - 1]) i--;  //向左尝试找相同的元素
// while (nums[j] === nums[j + 1]) j++;  //向右尝试找相同的元素
// return [i, j]
var searchRange = function (nums, target) {
  let left = 0, right = nums.length - 1, mid;
  // <=
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) break;
    if (nums[mid] > target) right = mid - 1;
    else left = mid + 1;
  }
  if (left > right) {
    return [-1, -1]
  }
  let i = mid, j = mid;
  while (nums[i] === nums[i - 1]) i--;
  while (nums[j] === nums[j + 1]) j++;
  return [i, j]
};
// @lc code=end

