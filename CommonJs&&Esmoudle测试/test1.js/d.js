
// commonjs   输出  1  1
const { age } = require('./c.js')
console.log(age);

setTimeout(() => {
  console.log(age);
}, 2000)