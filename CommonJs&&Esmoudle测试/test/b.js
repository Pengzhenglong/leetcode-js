
// esmodule    输出1  2 
import { age } from "./a.js";
console.log(age);

setTimeout(() => {
  console.log(age);
}, 2000)
// setTimeout(() => {
//   console.log(age)

// }, 3000)

// a.js
console.log('a.js文件的执行');
const importFun = () => {
  console.log(require('./c').c);
}

importFun()


module.exports = {
  importFun
}

// index.js
const A = require('./a');
console.log('index.js的执行');
复制代码
// c.js
console.log('c.js的运行');

const c = 3

module.exports = {
  c
}
