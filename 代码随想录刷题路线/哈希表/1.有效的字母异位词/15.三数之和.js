/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let result = []
   nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length - 2; i++) {
        // 去重（当前数字等于前一个数字则跳出循环）
        if (i === 0 || nums[i] !== nums[i - 1]) {
            let start = i + 1, end = nums.length - 1
            while (start < end) {
                if (nums[start] + nums[i] + nums[end] === 0) {
                    result.push([nums[i], nums[start], nums[end]])
                    start++;
                    end--;
                    while (start < end && nums[start] === nums[start - 1]) {
                        start++
                    }
                    while (start < end && nums[end] === nums[end +1]) {
                        end--;
                    }
                } else if (nums[start] + nums[i] + nums[end] < 0) {
                    start++
                } else {
                    end--
                }
            }
        }
    }
    return result;
};
// @lc code=end

