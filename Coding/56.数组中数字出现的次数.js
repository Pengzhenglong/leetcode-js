// 数组中数字出现一次的次数
// 题目描述
function singleNumber(nums) {
    let obj = {};
    for (let i = 0; i < nums.length; i++) {
        if (obj[nums[i]]) {
            delete obj[nums[i]];
        } else {
            obj[nums[i]] = 1;
        }
    }
    return Object.keys(obj)[0];
}
