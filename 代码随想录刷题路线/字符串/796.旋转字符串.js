/*
 * @lc app=leetcode.cn id=796 lang=javascript
 *
 * [796] 旋转字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
// var rotateString = function(s, goal) {
//     return  s.length===goal.length&& (s+s).indexOf(goal)!==-1
// };
var rotateString = function(s, goal) {
    return  s.length===goal.length&& (s+s).includes(goal)
};
// @lc code=end

