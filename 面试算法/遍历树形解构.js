// 遍历数组并且将数组中的所有的val值都提取出来
function flatten(array) {
  let result = [];
  function helper(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        helper(arr[i]);
      } else {
        result.push(arr[i]);
      }
    }
  }
  helper(array);
  return result;
}
// 牛客
function pre(list) {
  let res = []
  for (let i in list) {
    res.push(list[i]['val'])
    if (Array.isArray(list[i]['children'])) {
      res = res.concat(pre(list[i]['children']))
    }
  }
  return res
}
console.log(pre(list));
// csdn
var getItemByIdInTree = (id, tree) => {
  let res = null
  for (let i = 0; i < tree.length; i++) {
    let ele = tree[i]
    ele.id === id ? res = ele : ''
    if (res) break;
    if (ele.child.length) {
      res = getItemByIdInTree(id, ele.child)
    }
  }
  return res
}

var list = [
  { id: '1', name: '手机号分配', child: [] },
  {
    id: '2', name: '账号密码分配', child: [
      { id: '2_1', name: '自动分配', child: [] },
      { id: '2_2', name: '手动导入分配', child: [] },
    ]
  },
]
console.log(getItemByIdInTree('2_1', list));
var list = [
  { id: '1', name: '手机号分配', child: [], val: 1 },
  {
    id: '2', name: '账号密码分配', val: 2, child: [
      { id: '2_1', name: '自动分配', val: 3, child: [] },
      { id: '2_2', name: '手动导入分配', val: 3, child: [] },
    ]
  },
]

// 一个树形结构包含id chidren，如何根据id获取那个结点
function getItemByIdInTree(id, tree) {
  let res = null
  for (let i = 0; i < tree.length; i++) {
    let ele = tree[i]
    ele.id === id ? res = ele : ''
    if (res) break;
    if (ele.child.length) {
      res = getItemByIdInTree(id, ele.child)
    }
  }
  return res
}