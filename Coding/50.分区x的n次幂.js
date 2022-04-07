// var myPow = function(x, n) {
//   // 最后递归结果
//   // 递归要有最终条件
//  if(n===0)return 1 // n=0直接返回1
//  if(n<0){   				//n<0时 x的n次方等于1除以x的-n次方分 -n负负得正
//      return 1/myPow(x,-n)
//  }
//  if(n%2){    // n是奇数时 x的n次方 = x*x的n-1次方 ===>转化为偶数
//      return x*myPow(x,n-1)
//  }
//  return myPow(x*x,n/2) // n是偶数，使用分治，一分为二，等于x*x的n/2次方 （x*x）的n/2次方
// }

      

var myPow  =function(x,n){
  if(n===0){
    return 1
  }
  if(n<0){
    return  1/myPow(x,-n)
  }
  if(n%2){
    return  x*myPow(x,n-1)
  }
    return  myPow(x*x,n/2)
}