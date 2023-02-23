/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const  setArray = new  Array(26).fill(0)
    const  base = 'a'.charCodeAt()
    for(const i  of magazine){
        setArray[i.charCodeAt()-base]++
    }
    for(const  i  of  ransomNote){
        if(!setArray[i.charCodeAt()-base]) return false;
        setArray[i.charCodeAt()-base]--;
    }
    return true;

};
// @lc code=end

