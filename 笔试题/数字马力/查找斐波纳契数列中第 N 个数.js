let fibonacci = function (n) {
  if (n == 1) {
    return 0;
  }

  if (n == 2) {
    return 1;
  }

  let a = 0;
  let b = 1;
  let c = 0;
  for (let i = 3; i < n + 1; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return c;
}
// https://www.cnblogs.com/wanghang/p/6298824.html