// 四数之和
// Category	Difficulty	Likes	Dislikes
// algorithms	Medium(39.50 %)	1030 -
//   Tags
// Companies
// 给你一个由 n 个整数组成的数组 nums ，和一个目标值 target 。请你找出并返回满足下述全部条件且不重复的四元组[nums[a], nums[b], nums[c], nums[d]] （若两个四元组元素一一对应，则认为两个四元组重复）：

// 0 <= a, b, c, d < n
// a、b、c 和 d 互不相同
// nums[a] + nums[b] + nums[c] + nums[d] == target
// 你可以按 任意顺序 返回答案 。

 

// 示例 1：

// 输入：nums = [1, 0, -1, 0, -2, 2], target = 0
// 输出：[[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]]
// 示例 2：

// 输入：nums = [2, 2, 2, 2, 2], target = 8
// 输出：[[2, 2, 2, 2]]


/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
 var fourSum = function(nums, target) {
  nums.sort((a,b)=>a-b);
  const  res=[];
  // 双层循环，外层循环一次，里面循环执行全部
  for(let  i=0;i<nums.length-3;i++){
      for(let  j=i+1;j<nums.length-2;j++){
          let  low  =j+1;
          let  height=nums.length-1;
              while(low<height){
                  const  sum=nums[i]+nums[j]+nums[low]+nums[height];
                  if(sum===target){
                      res.push([nums[i],nums[j],nums[low],nums[height]])
                      while(nums[low]===nums[low+1]  )  low++;
                      while(nums[height]===nums[height-1])  height--;
                      low++;
                      height--;
                  }else  if(sum<target){
                      low++
                  }else{
                      height--;
                  }
              }
              while(nums[j]  ===nums[j+1] )  j++;
      }   
      while(nums[i]===nums[i+1])   i++;
  }
  return   res;
};
// @lc code=end

