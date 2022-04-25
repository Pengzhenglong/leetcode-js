/*
 * @lc app=leetcode.cn id=645 lang=javascript
 *
 * [645] 错误的集合
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */

// 方法一：排序
// 将数组排序之后，比较每对相邻的元素，即可找到错误的集合。

// 寻找重复的数字较为简单，如果相邻的两个元素相等，则该元素为重复的数字。

// 寻找丢失的数字相对复杂，可能有以下两种情况：

//  如果丢失的数字大于 11 且小于 nn，则一定存在相邻的两个元素的差等于 22，这两个元素之间的值即为丢失的数字；

//  如果丢失的数字是 11 或 nn，则需要另外判断。

// 为了寻找丢失的数字，需要在遍历已排序数组的同时记录上一个元素，然后计算当前元素与上一个元素的差。考虑到丢失的数字可能是 11，因此需要将上一个元素初始化为 00。

//  当丢失的数字小于 nn 时，通过计算当前元素与上一个元素的差，即可得到丢失的数字；

// 如果 \textit{ nums } [n - 1]\ne nnums[n−1] !== n，则丢失的数字是 nn。

// var findErrorNums = function (nums) {

//   const errorNums = new Array(2).fill(0)
//   const n = nums.length
//   nums.sort((a, b) => a - b)
//   let prev = 0
//   for (let i = 0; i < n; i++) {
//     const curr = nums[i]
//     if (curr === prev) {
//       errorNums[0] = prev;
//     } else if (curr - prev > 1) {
//       errorNums[1] = prev + 1;
//     }
//     prev = curr
//   };
//   if (nums[n - 1] !== n) {
//     errorNums[1] = n
//   }
//   return errorNums
// };


// 方法二：哈希表
// 重复的数字在数组中出现 22 次，丢失的数字在数组中出现 00 次，其余的每个数字在数组中出现 11 次。因此可以使用哈希表记录每个元素在数组中出现的次数，然后遍历从 11 到 nn 的每个数字，分别找到出现 22 次和出现 00 次的数字，即为重复的数字和丢失的数字。
// 复杂度分析

// 时间复杂度：O(n)O(n)，其中 nn 是数组 \textit{nums}nums 的长度。需要遍历数组并填入哈希表，然后遍历从 11 到 nn 的每个数寻找错误的集合。

// 空间复杂度：O(n)O(n)，其中 nn 是数组 \textit{nums}nums 的长度。需要创建大小为 O(n)O(n) 的哈希表。
var findErrorNums = function (nums) {
  const errorNums = new Array(2).fill(0)
  const n = nums.length
  const map = new Map()
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1)
//  log map   Map(4) {1 => 1, 3 => 1, 5 => 1, 6 => 1}
// [[Entries]]
// 0: {1 => 1}
// 1: {3 => 1}
// 2: {5 => 1}
// 3: {6 => 1}
  }
  for (let i = 1; i <= n; i++) {
    const count = map.get(i) || 0
    if (count === 2) {
      errorNums[0] = i
    }
    if (count === 0) {
      errorNums[1] = i
    }
  }
  return errorNums
};

// @lc code=end





