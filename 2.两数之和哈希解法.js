
  let nums = [2, 7, 11, 15];
  let target = 9;
  var  twoSum  = function (nums,target) {
    let  map=new  Map()
  for(let  i=0;i<nums.length; i++){
      if(map.has(target-nums[i])){
        return   [map.get(target-nums[i]),i]
      }else{
    map.set(nums[i], i)
  }
    }
  return  []
  }
  let  a=twoSum(nums,target)
  console.log(a);
