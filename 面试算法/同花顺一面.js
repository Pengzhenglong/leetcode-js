
// 实现数字千分位分隔

// 方法一：Number.prototype.toLocaleString()
// 返回这个数字在特定语言环境下的表示字符串。

// 该方法的详细介绍请看mdn developer.mozilla.org / zh - CN / docs /…

let num = 123456789;
num.toLocaleString()// "123,456,789"

该方法的很方便，但是兼容性不是很好

方法二: 通过正则匹配
let num = '12345678'
let reg = /(?=\B(\d{3})+$)/g
console.log(num.replace(reg, ",")) //12,345,678

复制代码
方法三: 自定义方法分隔

实现思路：

将用户传入的数字转为字符串。
使用字符串的split方法将其分隔成数组，然后在使用reverse方法进行反转数组。
通过用户传入的分割位数来确定需要将数值分为几组。
定义一个新数组用来存放添加分隔符的数组。
通过分组数来循环确定分隔符的位置。
传入的分割位数刚好将数组分组，可能分割符出现在第一位，这时我们需要删除该分隔符，然后反转该添加完分隔符的数组，最后通过join方法转为字符串。


function fn(num, sep, size) {
  num += "";
  let numArr = num.split("").reverse();
  let group = parseInt(numArr.length / size);
  let resArr = []
  // 设置一个变量来控制数组分割的起始和终止
  let i = 0;
  while (group) {
    // 确定分隔符的位置
    resArr = [...resArr, ...numArr.slice(size * i, size * (i + 1)), sep]
    group--;
    i++;
  }
  // 表示参与分割的数组元素个数
  const restIndex = resArr.length - parseInt(numArr.length / size);

  // 将没参与分组的元素添加到已经添加分隔符的数组中
  resArr = [...resArr, ...numArr.slice(restIndex)]
  // 将分隔好的数组反转，并转为字符串。
  let strNum = resArr.reverse().join('')
  if (strNum[0] === sep) {
    strNum = strNum.slice(1)
  }
  return strNum;
}
console.log(fn(12345678, ',', 3)) //12,345,678

