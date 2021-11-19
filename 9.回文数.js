
给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。

回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。例如，121 是回文，而 123 不是。

//  

// 示例 1：

// 输入：x = 121
// 输出：true
// 示例 2：

// 输入：x = -121
// 输出：false
// 解释：从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
// 示例 3：

// 输入：x = 10
// 输出：false
// 解释：从右向左读, 为 01 。因此它不是一个回文数。
// 示例 4：

// 输入：x = -101
// 输出：false

// 题解
// 1.负数，0，10的倍数，都不可能是回文数
// 利用整数反转来获取反转后的数，若和参数完全一致，则是回文数
// 注意：在整数反转到一半的时候，其实我们就可以判断是否是回文数了，这个可以作为优化项。
// 
function isPalindrome(x) {
  if (x < 0 || (!(x % 10) && x)) {
    return false;
  }
  let x2 = x, res = 0;
  while (x2) {
    res = res * 10 + x2 % 10;
    x2 = parseInt(x2 / 10);
    // x2 = Math.floor(x2 / 10)
  }
  return res === x;
}