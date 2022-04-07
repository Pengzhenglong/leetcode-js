/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// 题目
// 实现 strStr()
// Category	Difficulty	Likes	Dislikes
// algorithms	Easy (40.35%)	1190	-
// Tags
// Companies
// 实现 strStr() 函数。

// 给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串出现的第一个位置（下标从 0 开始）。如果不存在，则返回  -1 。



// 说明：

// 当 needle 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。

// 对于本题而言，当 needle 是空字符串时我们应当返回 0 。这与 C 语言的 strstr() 以及 Java 的 indexOf() 定义相符。



// 示例 1：

// 输入：haystack = "hello", needle = "ll"
// 输出：2
// 示例 2：

// 输入：haystack = "aaaaa", needle = "bba"
// 输出：-1
// 示例 3：

// 输入：haystack = "", needle = ""
// 输出：0
// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

// 方法一：
// indexOf  一行代码搞定
// return  needle.length>0?haystack.indexOf(needle):0;

var strStr = function (haystack, needle) {
  if (needle.length == 0) return 0;

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      if (haystack.slice(i, i + needle.length) === needle) {
        return i;
      }
    }
  }
  return -1;
};
// @lc code=end

