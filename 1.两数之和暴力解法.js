
<script>
  let nums = [2, 7, 11, 15];
  let target = 9;
  let  twoSum  =function (nums,target) {
       for(let i=0;i<nums.length; i++){
         for(let j=i+1;j<nums.length; j++){
          if  (nums[i]===target-nums[j]){
           return  [i,j]}
         }
       }
  return  []
     }
  let  a= twoSum(nums,target)
  console.log(a);
</script>

