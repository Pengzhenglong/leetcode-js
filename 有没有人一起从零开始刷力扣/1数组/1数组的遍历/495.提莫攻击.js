/*
 * @lc app=leetcode.cn id=495 lang=javascript
 *
 * [495] 提莫攻击
 */

// @lc code=start
/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
  var findPoisonedDuration = function(timeSeries, duration) {
  let res=0;
  const len  = timeSeries.length;
  // 从i开始
  for(let i=1;i<len;i++){
    if(timeSeries[i]-timeSeries[i-1]<=duration){
      // 若当前与前一个间隔小于等于duration，中毒时间多间隔时间
      res += timeSeries[i] - timeSeries[i-1];
    }else{
      // 若当前与前一天的时间差大于duration，中毒时间多了duration的毒药
      res+=duration;
    }
  }
  res+=duration
  return  res
};
// @lc code=end

