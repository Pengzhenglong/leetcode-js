 /*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  let  nums1Set = new  Set(nums1);
  let  reSet  = new  Set();
  for(let i of nums2) {
    if(nums1Set.has(i)){
        reSet.add(i);
    }
  }
  return  Array.from(reSet);
};
// for  of  遍历的是值 

var intersection = function(nums1, nums2) {
    let  nums1Set = new   Set(nums1);
    let  newSet = new Set();
    console.log(nums2)
    for(let  i  of  nums2){
      console.log(i)
      if(nums1Set.has(i)){
        newSet.add(i);
      }
    }
    console.log(newSet);
    return  Array.from(newSet);
};


var intersection = function(nums1, nums2) {
  return  Array.from(new Set(nums1.filter(item=>nums2.includes(item))))
  };
// @lc code=end

var intersection = function(nums1, nums2) {
    return  Array.from(new  Set(nums1.filter(item=>nums2.includes(item))))
  };