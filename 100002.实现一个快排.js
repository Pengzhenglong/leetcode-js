// 1.Quickersort通过数组选取一个元素表示为基准点，把数组中的所有其他元素分为两类-（大于和小于此基准点的数组）
// 2.然后把作为这一轮排序结果的两个数组（数组元素都小于基准点的数组和数组元素都大于基准点的数组）再进行相同的排序。即分别再选个基准点，然后基于基准点分为两个数组元素分别小于和大于基准点的数组。
// 3.最终，由于最后数组中没有元素或只有一个元素，因此不用再比较了。剩下的值都已经基于基准点拍好序了。
const quickSort1 = arr => {
  if (arr.length <= 1) {//数组小于等于1时的情况
    return arr;
  }
  const midIndex = Math.floor(arr.length / 2)//取中间的元素为基准点
  const arrArr = arr.splice(midIndex, 1)
  const midIndexVal = arrArr[0]
  const left = []
  const right = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < midIndexVal) {
      left.push(arr[i]);
    } else {
      right.push(arr[i])
    }
  }
  return quickSort1(left).concat(midIndexVal, quickSort1(right));//重复进行上面的步骤，直到剩下小于等于一个元素。
}

const array2 = [5, 4, 3, 2, 10, 1, 6];
console.log('quickSort1', quickSort1(array2))