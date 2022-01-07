/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */
// 最长公共前缀
// Category	Difficulty	Likes	Dislikes
// algorithms	Easy (41.31%)	1955	-
// Tags
// Companies
// 编写一个函数来查找字符串数组中的最长公共前缀。

// 如果不存在公共前缀，返回空字符串 ""。

 

// 示例 1：

// 输入：strs = ["flower","flow","flight"]
// 输出："fl"
// 示例 2：

// 输入：strs = ["dog","racecar","car"]
// 输出：""
// 解释：输入不存在公共前缀。
 
// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (!strs.length) {
    return ''
  }
  let res = strs[0];
  for (ch of strs) {
    for (let i = 0; i < res.length; i++) {
      if (ch[i] !== res[i]) {
        res = res.slice(0, i)
        break
      }
    }
  }
  return res;
};
// @lc code=end

