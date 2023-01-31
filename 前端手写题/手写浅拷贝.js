// 描述
// 请补全JavaScript代码，要求实现一个对象参数的浅拷贝并返回拷贝之后的新对象。
// 注意：
// 1. 参数可能包含函数、正则、日期、ES6新对象

const _shallowClone = target => {
    // 补全代码
    var obj = Object.assign({}, target)
    return obj;
}


function shallowCopy (oldObj) {
    if (typeof oldObj !== 'object' || oldObj === null) return oldObj// 如果是基本类型就直接返回这个值

    let newObj = oldObj instanceof Array ? [] : {}  // 判断是对象还是数组
    for (let key in oldObj) {   // 遍历对象上面的属性
        if (oldObj.hasOwnProperty(key)) {
            newObj[key] = oldObj[key]
        }
    }
    return newObj
}

const shallowCopy = target => {
    if (typeof target !== 'object' || typeof target === null) return  target;
    let newTarget = target instanceof Array ? [] : {};
    for (let key in target) {
        if (target.hasOwnProperty(key)) {
            newTarget[key] = target[key];
        }
    }
    return newTarget;
}