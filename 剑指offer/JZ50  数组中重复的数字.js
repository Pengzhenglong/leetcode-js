// 描述
// 在一个长度为n的数组里的所有数字都在0到n-1的范围内。 数组中某些数字是重复的，但不知道有几个数字是重复的。也不知道每个数字重复几次。请找出数组中任一一个重复的数字。 例如，如果输入长度为7的数组[2,3,1,0,2,5,3]，那么对应的输出是2或者3。存在不合法的输入的话输出-1
// 示例1
// 输入：
// [2,3,1,0,2,5,3]
// 返回值：
// 2
// 说明：
// 2或3都是对的 
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param numbers int整型一维数组 
 * @return int整型
 */
function duplicate(numbers) {
  // write code here
  let set = new Set()
  for (let i = 0; i < numbers.length; i++) {
    if (set.has(numbers[i])) {
      return numbers[i];
    } else {
      set.add(numbers[i])
    }

  }
  return -1;
}
let numbers = [2, 1, 3, 1, 4]

console.log(duplicate(numbers))
// module.exports = {
//   duplicate: duplicate
// };