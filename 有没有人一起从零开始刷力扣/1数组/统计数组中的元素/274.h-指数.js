/*
 * @lc app=leetcode.cn id=274 lang=javascript
 *
 * [274] H 指数
 */

// @lc code=start
/**
 * @param {number[]} citations
 * @return {number}
 */
//  解题思路
//  先对数组降序排序，大的在前
//  从头遍历排序好的数组，先遍历的几个肯定是比较大的（引用次数多的）
//  h定义：有h个数大于h，且另外的数小于等于h
//  先让h=0，每遍历一次，发现数大于h，就让h++
//  一直到citations[i] > h不成立
//  说明前面遍历过的h个数都比h大了，后面的数都不比h大
//  则h就是答案


var hIndex = function (citations) {
  citations.sort((a, b) => { return b - a })
  console.log(citations);
  let [h, i] = [0, 0]
  const len = citations.length
  while (i < len && citations[i] > h) {
    h++;
    i++;
  }
  return h
};
// @lc code=end

hIndex([3, 0, 6, 1, 5])