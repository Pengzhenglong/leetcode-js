
// 搜索旋转排序数组
// Category	Difficulty	Likes	Dislikes
// algorithms	Medium (42.95%)	1713	-
// Tags
// Companies
// 整数数组 nums 按升序排列，数组中的值 互不相同 。

// 在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了 旋转，使数组变为 [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]（下标 从 0 开始 计数）。例如， [0,1,2,4,5,6,7] 在下标 3 处经旋转后可能变为 [4,5,6,7,0,1,2] 。

// 给你 旋转后 的数组 nums 和一个整数 target ，如果 nums 中存在这个目标值 target ，则返回它的下标，否则返回 -1 。

 

// 示例 1：

// 输入：nums = [4,5,6,7,0,1,2], target = 0
// 输出：4
// 示例 2：

// 输入：nums = [4,5,6,7,0,1,2], target = 3
// 输出：-1
// 示例 3：

// 输入：nums = [1], target = 0
// 输出：-1
 

// 提示：

// 1 <= nums.length <= 5000
// -10^4 <= nums[i] <= 10^4
// nums 中的每个值都 独一无二
// 题目数据保证 nums 在预先未知的某个下标上进行了旋转
// -10^4 <= target <= 10^4





/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */


//解法
// 二分法
// 因为是一个旋转数组，前半部分是有序的同时后半部分也是有序的
// 在旋转数组中，会存在一个峰值，也会存在一个低谷值，当然峰值有可能是数组的最末位，低谷值也有可能存在于数组的最首位


// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  //如果为空或者是空数组的情况
  if (nums == null || !nums.length) {
    return -1;
  }
  let begin = 0,
   end = nums.length - 1;
  while (begin <= end) {

    let mid = Math.floor((begin + end) / 2)
    if (nums[mid] === target) {
      return mid;
    }
    //如果左边是有序的
    if (nums[begin] <= nums[mid]) {
      //同时target 在[nums[begin],nums[mid]]中，那么就在这段有序区间查找
      if (nums[begin] <= target && target <= nums[mid]) {
        end = mid - 1;
      } else {
        begin = mid + 1;
      }

    }
    //如果右侧是有序的
    else {
      //同时target在[nums[mid],nums[end]中，那么就在这段有序区间查找]
      if (nums[mid] <= target && target <= nums[end]) {
        begin = mid + 1;
      } else {
        end = mid - 1;
      }
    }

  }
  return -1;
};
// @lc code=end

