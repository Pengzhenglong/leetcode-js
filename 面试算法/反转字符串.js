// 反转字符串
// 题目：反转字符串
function reverseString(str) {
    var arr = str.split('');
    var len = arr.length;
    var temp;
    for (var i = 0; i < len / 2; i++) {
        temp = arr[i];
        arr[i] = arr[len - 1 - i];
        arr[len - 1 - i] = temp;
    }
    return arr.join('');
}
// 344. 反转字符串
// 编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 s 的形式给出。

// 不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。



// 示例 1：

// 输入：s = ["h","e","l","l","o"]
// 输出：["o","l","l","e","h"]
// 示例 2：

// 输入：s = ["H","a","n","n","a","h"]
// 输出：["h","a","n","n","a","H"]
// 双指针方法
function reverseString(s) {
    let len = s.length;
    for (let i = 0, j = len - 1; i < j; i++, j--) {
        // ES6解构赋值交换
        [s[i], s[j]] = [s[j], s[i]]
    }
}