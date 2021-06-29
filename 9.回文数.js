// 负数，0，10的倍数，都不可能是回文数
var isPalindrome = function (x) {
  if (x < 0 || (!(x % 10) && x)) {
    return false;
  }
  let x2 = x, res = 0;
  while (x2) {
    res = res * 10 + x2 % 10;
    x2 = parseInt(x2 / 10)
    // x2 = Math.floor(x2 / 10)
  }
  return res === x;
};