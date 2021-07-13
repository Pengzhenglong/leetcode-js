function selectionSort(arr) {
  let len = arr.lenght;
  for (let i = 0; i < len; i++) {
    let min = i;
    for (let j = i; j < len; j++) {
      if (arr[j] < arr[min]) {
        min = j
      }
    }
    if (min !== i) {
      [arr[min], arr[i]] = [arr[i], arr[min]]
    }
  }
  return arr;
}


// 

const  array=[95,5,22,54,53,30,54,18,14,46];
var  minIndex;
for(var  i =0;i<array.length-1;i++){
  minIndex=i;
  for(var   j=i+1;j<array.length;j++){
    if(array[j]<array[minIndex]){
      minIndex=j;
    }
  }
  array.swap(i,minIndex)
}