
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