// 方法一

var arr = [1, 'a', 'a', 'b', 'd', 'e', 'e', 1, 0]
function test(){
  for (var i = 0; i < arr.length; i++){
    for(var j = i + 1; j < arr.length; j++){
      if(arr[i] === arr[j]) arr.splice(j,1);//如果前一个值与后一个值相等，那么就去掉后一个值，splice()可以修改原数组
    }
  }
  return arr;
}
// test();

// 方法二
var arr = [1, 1, 4, 50, 50, 6, 2, 2];
function test(){
  return arr.filter(function(item,index,array){
    return array.indexOf(item) === index; 
    //或者这样写return array.indexOf(item, index+1) === -1; 如果没有重复项，返回true
    //用filter方法，返回ietm对应的indexOf索引值与本身index索引值相等的值，也就是去掉重复的值，filter本身不修改数组，只是会自动遍历数组，去掉重复值后，那么arr就剩下不重复的了
  });
}
test();//输出Array [ 1, 4, 50, 6, 2 ]


// 方法三

var arr = [1, 1, 4, 50, 50, 6, 2, 2];
function unique(arr){
  return Array.from(new Set(arr));
}
// unique(arr);


