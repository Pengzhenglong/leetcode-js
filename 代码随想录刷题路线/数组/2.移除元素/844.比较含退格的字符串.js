/*
 * @lc app=leetcode.cn id=844 lang=javascript
 *
 * [844] 比较含退格的字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// 双指针法
// 将字符串处理为数组处理。
// 遍历数组中的每一个字符，如果是 # 则表示需要删除后面字母的个数，使用del标记一下。
// 处理完之后再返回字符串比较输入的两个字符串都经过这么处理后是否相等即可

var backspaceCompare = function (s, t) {
  return delWord(s) === delWord(t)
};
const delWord = (word) => {
  let del = 0;
  let arr = []
  const wordArray = word.split('')
  while (wordArray.length) {
    const char = wordArray.pop()
    if (char === "#") {
      del++
    } else {
      if (del === 0) {
        arr.unshift(char)
      } else {
        del--
      }
    }
  }
  return arr.join('')
}
// @lc code=end

