// sort排序
/* 
const  arr  = [3,15,8,29,102,22]

arr.sort((x,y)=>{
  console.log(x+'-'+y+'='+(x-y));
  return  x-y;
})
console.log(arr)*/

nums=[3,6,9,1]

var maximumGap = function (nums, max = 0) {
  if (nums.length < 2){
    return 0;}
  nums.sort((a, b) =>
    a - b
  )
  console.log(nums)
  for (let i = 0; i < nums.length - 1; i++) {
    max = Math.max(max, nums[i + 1] - nums[i])
  }
  return max
}

var  a= maximumGap(nums,max=0)
console.log(a)