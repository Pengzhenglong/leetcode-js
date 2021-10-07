// Set类似于数组，但是它里面每一项的值是唯一的，没有重复的值，Set是一个构造函数，用来生成set的数据结构
```
let s = new Set();
let arr = [2, 3, 5, 4, 5, 2, 2];
arr .forEach(item => arr.add(item)); //向set添加重复的值for (let i of s) 
{
  console.log(i);
}
// 2 3 5 4 结果set不会添加重复的值
```
  // Map函数

  // Map类似于对象，也是键值对的集合，但是“键”的范围不限制于字符串，各种类型的值（包含对象）都可以当作键。Map 也可以接受一个数组作为参数，数组的成员是一个个表示键值对的数组。注意Map里面也不可以放重复的项。let map = new Map([['js','react']]);
  ```
map.set('js','react');//看看是否可以放重复的项
map.set('javaScript','vue');
console.log(map)//Map {'js' => 'react','javaScript' => 'vue'} 不可以放重复项
```
let nums = [2, 7, 11, 15];
let target = 9;
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
let a = twoSum(nums, target)
console.log(a);
