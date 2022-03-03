
// 法一、 排序比较法
// 先排序，再通过遍历比较，若相等，则添加到结果数组中，最后对结果数组进行去重，即可得到结果。
const root = [1, 2, 2, 4, 4, 4, 6, 8, 8]
// function getSameNum(Arr) {
//             let result = [];//用于保存最后的结果
//             //排序
//             let arr = Arr.sort(function (a, b) {
//                 return a - b;//increse
//             });
//             //由于每次遍历访问Arr.length都是需要重复执行的，因此保存到len，提高效率
//             let len = Arr.length;
//             //遍历比较，看是否有相同的数字
//             for (let i = 0; i < len - 1; i++) {
//                 if (Arr[i] === Arr[i + 1]) {
//                     result.push(Arr[i]);
//                 }
//             }
//             //去重，防止有三个相同的时，会多push一个相同数字
//             return Array.from(new Set(result));

//         }


// 法二、集合唯一性法
// 利用Set中元素的唯一性，逐个将数组中的元素添加到set中，若size没发生改变，则说明数组的此元素为重复元素，再对结果数组去重，即可得到结果。
// function useSet(Arr) {
//             let set = new Set();
//             let result = [];
//             let len = Arr.length;
//             for (let i = 0; i < len; i++) {
//                 let setLen = set.size;
//                 set.add(Arr[i]);
//                 //若集合调用add方法后，集合的size没有变化，则说明该元素为重复的数字
//                 if (setLen == set.size) {
//                     result.push(Arr[i]);
//                 }
//             }
//             return Array.from(new Set(result));
//         }

//         console.log(useSet(root));
// 法三、indexOf查找
// 遍历每一个数组元素，通过indexOf(curNum,startPos)的方式进行查找，若查询结果不为-1，则说明该数组元素重复。
// function useIndexOf(Arr) {
//             let len = Arr.length;
//             let result = [];
//             for (let i = 0; i < len; i++) {
//                 let curNum = Arr[i];
//                 //遍历到Arr[i]时，若在这个索引i之后都没找到相同数字，则indexOf会返回-1，说明改数字不存在重复
//                 if (Arr.indexOf(curNum, i+1) != -1) {
//                     result.push(curNum);
//                 }
//             }
//             return Array.from(new Set(result));
//         }

//         console.log(useIndexOf(root));


// set
function useSet(Arr) {
  let set = new Set();
  let result = [];
  let len = Arr.length;
  for (let i = 0; i < len; i++) {
    if (set.has(Arr[i])) {
      result.push(Arr[i]);
    } else {
      set.add(Arr[i])
    }
  }
  return Array.from(new Set(result));
}

console.log(useSet(root));