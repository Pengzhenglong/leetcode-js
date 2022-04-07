// 暴力解法
 let nums = [-1,0,1,2,-1,-4]
 var threeSum = function (nums) {
  let res = []
  for (let i = 0; i < nums.length ; i++) {
      for (let j = i + 1; j < nums.length; j++) {
          for (let k = j + 1; k < nums.length; k++) {
              if (nums[i] + nums[j] + nums[k] === 0) {
                  res.push([nums[i], nums[j], nums[k]])
              }
          }
      }
  }
  return res;
};


let   a=threeSum(nums)
console.log(a)
// let  nums=[12,4,4,6,7]

// var  test=function(nums){
//   for(let  i=0;i<nums.length-1;i++){
//     console.log(i)
//     for(let  j=i+1;j<nums.length;j++){
//       console.log(j)
//     }
//   }
// }

// let a  =test(nums)