/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 暴力解法 双重for循环
// var twoSum = function (nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] ===target - nums[j]) {
//                 return [i, j];
//             }
//         }

//     }; 
//     return []
// }
//  obj key  value
var twoSum = function (nums, target) {
    let obj = {}
    for (let i = 0; i < nums.length; i++) {
        let cur = nums[i]
        if (cur in obj) {
            return [obj[cur], i]
        } else {
            obj[target - cur] = i;
          
        }
          console.log(obj)
    }
    return []
}
//   map
var twoSum = function (nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(target - nums[i])) {
            return [map.get(target - nums[i]), i]
        } else {
            map.set(nums[i], i)
        }
    }
}
// @lc code=end

