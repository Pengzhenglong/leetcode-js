// 最接近的三数之和
// Category	Difficulty	Likes	Dislikes
// algorithms	Medium (45.84%)	963	-
// Tags
// Companies
// 给你一个长度为 n 的整数数组 nums 和 一个目标值 target。请你从 nums 中选出三个整数，使它们的和与 target 最接近。

// 返回这三个数的和。

// 假定每组输入只存在恰好一个解。



// 示例 1：

// 输入：nums = [-1,2,1,-4], target = 1
// 输出：2
// 解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。
// 示例 2：

// 输入：nums = [0,0,0], target = 1
// 输出：0

/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

//  思路
//  先将数组从小到大排序，便于微调 sum 的大小。
//  从左到右遍历，先固定一个数，剩下的部分，用头尾双指针扫描
//  如果 sum 大于目标值，就右指针左移，使 sum 变小，否则左指针右移，sum 变大。
//  再看 abs(sum - target) 是否比之前更小了，如果是，将当前 sum 更新给 res
//  遍历结束，就有了最接近目标值的 sum


var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b)
  let res = nums[0] + nums[1] + nums[nums.length - 1];
  for (let i = 0; i < nums.length - 2; i++) {
    const n1 = nums[i];
    let l = i + 1;
    let r = nums.length - 1;
    while (l < r) {
      const n2 = nums[l]
      const n3 = nums[r]
      const sum = n1 + n2 + n3;
      if (sum > target) {
        r--
      } else {
        l++
      }
      if (Math.abs(sum - target) < Math.abs(res - target)) {
        res = sum;
      }
    }
  }
  return res;
};
  // @lc code=end


