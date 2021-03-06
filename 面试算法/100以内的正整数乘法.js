// 100以内的正整数乘法
// 小明在做100以内的正整数乘法时，错误的在答案后面多写了一个0，这样答案的后两位数字是10。

// 小林看见小明的答案后，在旁边批注：“这个答案是错的，正确答案的二进制表示法刚好是回文数”。

// 请写一个函数，它接受“错误的答案”，并输出可能的乘法表达式组合，如果“错误的答案”无法推理为乘法表达式，则输出"error"。

// 形如：191，12321，123321，100001 这样的正序和逆序是一致的数字称为回文数
// 输入描述
// 10

// 输出描述
// 格式：1x1=
function getResult(n) {
    let result = [];
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (i * j === n) {
                result.push(`${i} * ${j} = ${n}`);
            }
        }
    }
    return result.length === 0 ? 'error' : result;
}