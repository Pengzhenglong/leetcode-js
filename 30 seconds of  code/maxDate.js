

// 返回给定日期的最大值。

// 使用 ES6 扩展语法 withMath.max()查找最大日期值。
// 使用new Date()将其转换为一个Date对象。
// Javascript
const maxDate = (...dates) => new Date(Math.max(...dates));

// Example
const dates = [
  new Date(2017, 4, 13),
  new Date(2018, 2, 12),
  new Date(2016, 0, 10),
  new Date(2016, 0, 9)
];
maxDate(...dates); // 2018-03-11T22:00:00.000Z

console.log(maxDate(...dates));