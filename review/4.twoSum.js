var  twoSum = function(nums,target){
  let  map=  new  Map()
    for(let  i=0;i<nums.length;i++){
      if(map.has(target-nums[i])){
        // 这里返回的是数组
        return   [map.get(target-nums[i]),i]
      }else{
          map.set(nums[i],i)
      }
    }
    return  []
}