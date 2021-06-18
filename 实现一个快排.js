const quickSort1 = arr => {
  if (arr.length <= 1) {
    return arr;
  }
  const midIndex = Math.floor(arr.length / 2)
  const arrArr = arr.splice(midIndex, 1)
  const  midIndexVal  = arrArr[0]
  const  left  = []
  const   right=[]
  for(let  i=0;i<arr.length;i++){
    if(arr[i]<midIndexVal){
      left.push(arr[i]);
    }else{
      right.push(arr[i])
    }
  }
  return  quickSort1(left).concat(midIndexVal,quickSort1(right));
}

const  array2=[5,4,3,2,10,1,6];
console.log('quickSort1',quickSort1(array2))