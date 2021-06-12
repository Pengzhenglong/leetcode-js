const quickSort1 = arr => {
  if (arr.length <= 1) {
    return arr;
  }
  // 取基准点
  const midIndex = Math.floor(arr.length / 2)
  const valArr = arr.splice(midIndex, 1)
  const midIndexVal = valArr[0]
  const left = []
  const right = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < midIndexVal) {
      left.push(arr[i]);
    } else {
      right.push(arr[i])
    }
  }
  return quickSort1(left).concat(midIndexVal, quickSort1(right));
}

const array2 = [5, 4, 3, 2, 1];
console.log('quickSort1', quickSort1(array2))