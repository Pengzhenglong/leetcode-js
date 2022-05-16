/*
 * @lc app=leetcode.cn id=697 lang=javascript
 *
 * [697] 数组的度
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
//  首先要找到数组度最大的数字，可以通过遍历数组存到哈希表里
//  其次找到了这个数字之后，要找度相同但区间最小的数，求出这个区间
//  这个子区间肯定不可能是度最大的数自己的子区间，这样会让度变小，因此每个数字的度区间肯定是固定的
//  因此在遍历数组时，额外把每个数出现的区间存到哈希表里记录下来
//  最后从度等于最大度的数字里找出区间最小的既是最终结果
 

var findShortestSubArray = function (nums) {
  // 新建哈希表，key-value存储每个元素出现的次数
  const map = new Map();
  nums.forEach((item) => {
    if (!map.has(item)) {
      map.set(item, 1);
    } else {
      const count = map.get(item)
      map.set(item, count + 1);
    }
  })
  console.log(map);
  let maxCount = 0;
  let lengths = []
  // 遍历map，找出哪个数字出现次数最多
  map.forEach((value, key) => {
    if (value > maxCount) {
      console.log(value, key);
      maxCount = value;
      console.log(maxCount);
    }
  })
  // 遍历map，找出哪个数字出现次数等于数组的度
  // 得到该数字在数组种的最初索引和最后索引，算出长度，存入lengths数组
  map.forEach((value, key) => {
    if (value === maxCount) {
      const index = nums.indexOf(key);
      const lastIndex = nums.lastIndexOf(key);
      lengths.push(lastIndex - index + 1);

    };
  }
  )
  // 得到最短的长度
  let minLength = Math.min(...lengths);
  return minLength;
}
// findShortestSubArray([1, 2, 2, 3, 1])
// @lc code=end



// Map(3) {1 => 2, 2 => 2, 3 => 1}
//  2 1