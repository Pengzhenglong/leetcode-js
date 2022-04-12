// 冒泡排序
function testBubbleSort() {
  var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var len = arr.length;
  for (var i = 0; i < len; i++) {
    for (var j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        // 交换两者  解构赋值
        // [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  console.log(arr);
}
// 快速排序
const testQuickSort = arr => {
  if (arr.length <= 1) {
    return arr;
  }
  const mid = arr[0];// 基准值
  const left = []
  const right = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < mid) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return [...testQuickSort(left), mid, ...testQuickSort(right)]
}

// 选择排序
// 从上面可以看到，对于具有 n 个记录的无序表遍历 n-1 次，第i 次从无序表中第 i 个记录开始，找出后序关键字中最小的记录，然后放置在第 i 的位置上

// 直至到从第n个和第n-1个元素中选出最小的放在第n-1个位置
function testSelectSort(arr) {
  let len = arr.length;
  let minIndex;
  for (let i = 0; i < len - 1; i++) {
    minIndex = i;
    for (let j = 0; j < len; j++) {
      if (arr[j] < arr[minIndex]) {  //寻找最小数
        minIndex = j;  //将最小数的索引保存
      }
    }
    [arr[i], arr[minIndex]] = arr[minIndex], arr[i];
  }
  return arr;
}
// 插入排序
// 将第一待排序序列第一个元素看做一个有序序列，把第二个元素到最后一个元素当成是未排序序列。

// 从头到尾依次扫描未排序序列，将扫描到的每个元素插入有序序列的适当位置

// 如果待插入的元素与有序序列中的某个元素相等，则将待插入元素插入到相等元素的后面
function testInsertSort(arr) {
  const len = arr.length;
  let preIndex, current;
  for (let i = 1; i < len; i++) {
    preIndex = i - 1;
    current = arr[i];
    while (preIndex >= 0 && arr[preIndex] > current) {
      arr[preIndex + 1] = arr[preIndex];
      preIndex--;
    }
    arr[preIndex + 1] = current;
  }
  return arr;
}


function InsertSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[i]) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
      }
    }
  }
  return arr;
}
// 在插入排序中，当待排序数组是有序时，是最优的情况，只需当前数跟前一个数比较一下就可以了，这时一共需要比较N- 1次，时间复杂度为O(n)

// 最坏的情况是待排序数组是逆序的，此时需要比较次数最多，总次数记为：1+2+3+…+N-1，所以，插入排序最坏情况下的时间复杂度为O(n^2)

// 通过上面了解，可以看到插入排序是一种稳定的排序方式