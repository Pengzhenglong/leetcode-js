// 示例 1：

// 输入：nums = [5,2,3,1]
// 输出：[1,2,3,5]

// 示例 2：

// 输入：nums = [5,1,1,2,0,0]
// 输出：[0,0,1,1,2,5]

var sortArray = function (nums) {
  return nums.sort((a, b) =>
    a - b)
};