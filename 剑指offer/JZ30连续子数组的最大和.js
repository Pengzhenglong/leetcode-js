// 描述
// 输入一个长度为n的整型数组a，数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。要求时间复杂度为 O(n).

// 提示:
// 1 <= n <= 500
// -100 <= a[i] <= 100

// 示例1
// 输入：
// [1,-2,3,10,-4,7,2,-5]

// 返回值：
// 18

// 说明：
// 输入的数组为{1,-2,3,10,-4,7,2,-5}，和最大的子数组为{3,10,-4,7,2}，因此输出为该子数组的和 18。    

function FindGreatestSumOfSubArray(array) {
  // write code here
  if (array.length == 0)
    return 0
  var sum = array[0] //保存每组的和
  var maxSum = array[0] //连续子数组最大和
  for (var i = 1; i < array.length; i++) {
    sum = Math.max(sum + array[i], array[i]);
    maxSum = Math.max(sum, maxSum)
  }
  return maxSum

}
module.exports = {
  FindGreatestSumOfSubArray: FindGreatestSumOfSubArray
};
