
// 整数反转
// Category	Difficulty	Likes	Dislikes
// algorithms	Easy (35.09%)	3331	-
// Tags
// Companies
// 给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。

// 如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。

// 假设环境不允许存储 64 位整数（有符号或无符号）。
 

// 示例 1：

// 输入：x = 123
// 输出：321
// 示例 2：

// 输入：x = -123
// 输出：-321
// 示例 3：

// 输入：x = 120
// 输出：21
// 示例 4：

// 输入：x = 0
// 输出：0
 

// 提示：

// -231 <= x <= 231 - 1
/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
let  res  =0;
while(x){
  res  =res*10  +x%10;
  if(res>Math.pow(2,31)-1  ||  res<Math.pow(-2,31)){
    return  0;
  }else{
    x=  ~~(x/10)
  }

} 
 return  res;
};
// @lc code=end
//  ~~讲解
// 简单一点就是将一些变量转化为Number（数字）类型的；

// 具体转化哪些变量有用呢：

// 数字类型的字符串可以转化为纯数字
// var a='123';
// console.log(~~a); //输出123
// 字符串中带了其他字母，符号，或者其他除数字外的东西，一律输出 Number类型的0
// var a='asd';

// console.log(~~a); //输出0

// 任何boolen类型的，如果为TRUE则输出1，FALSE输出0；
// var a=1==1;
// console.log(~~a);//输出1
//  特殊类型，转化为Boolean是true的输出1，转化为boolean是false的输出0；
// var a=undefined;

// console.log(~~a);//输出0

// var b=！undefined;

// console.log(~~b);//输出1