//奇数和差
// 给定一个正整数n，按如下规则求从1-n所有奇数之和与偶数之和的差：

// 所有奇数排列里面，i为当前排列序号值，如果i是奇数，则取2Ni；如果i是偶数，则取Ni左移3位的立方根

// 所有偶数排列里面，i为当前排列序号值，如果i是奇数，则取Ni平方根的整数部分；如果i是偶数，则取Ni右移4位所得结果的平方值

// 排列序号值从1开始

// 输入描述
// 10

// 输出描述
// 格式：1x1=
function getResult(n) {
    let result = [];
    for (let i = 1; i <= n; i++) {
        let odd = 2 * i * i;
        let even = i * i * i;
        result.push(odd - even);
    }
    return result.join(' ');
}


function sumOddAndEven(n) {
    let odd = 0;
    let even = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            even += i * i;
        } else {
            odd += 2 * i * i;
        }
    }
    return odd - even;
}