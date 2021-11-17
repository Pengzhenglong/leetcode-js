# leetcode-js

### 两数之和--暴力解法，两次for循环进行遍历，时间复杂度为O(n^2)

```
let twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === target - nums[j]) {
        return [i, j]
      }
    }
  }
  return []
}
```

### 两数之和--哈希解法(map中的has和set,get方法使用)
<!-- Set类似于数组，但是它里面每一项的值是唯一的，没有重复的值，Set是一个构造函数，用来生成set的数据结构 -->

<!-- Map类似于对象，也是键值对的集合，但是“键”的范围不限制于字符串，各种类型的值（包含对象）都可以当作键。Map 也可以接受一个数组作为参数，数组的成员是一个个表示键值对的数组。注意Map里面也不可以放重复的项。let map = new Map([['js','react']]); -->
```
var twoSum = function (nums, target) {
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i]
    } else {
      map.set(nums[i], i)
    }
  }
  return []
}
```

### Js实现冒泡排序

冒泡排序是效率最低的排序算法，由于算法嵌套了两轮循环，所以时间复杂度委O(n^2)

最好的情况给出一个已经排序的数组进行冒泡排序，时间复杂度为O(n)

```
// 冒泡排序
function bubbleSort(arr) {
  let len = arr.length;
  // 遍历数组的长度，以确定循环次数
  for (let i = 0; i < len;i++) {
    // 遍历数组len次，忽略后面的i项
    for (let j = 0; j < len - 1 - i; j++) {
      // 将每一项与后一项进行对比，不符合要求的就换位
      if (arr[j] > arr[j + 1]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]]
      }
    }
  }
  return arr
}
```

###

### 斐波那契数列

题目分析，斐波那契数列公式为：f[n]= f[n-1] +f[n-2] ,初始值为f[0]=0,f[1]=1,目标求f[n]

#### 方法一:递归

```
function  Fibonacci(n){
  if(n===0||n===1){
    return  n 
  }
  return   Fibonacci(n-1)+Fibonacci(n-2)
}

module.exports={
  Fibonacci 
}

```
