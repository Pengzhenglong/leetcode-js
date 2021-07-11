# leetcode-js

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
