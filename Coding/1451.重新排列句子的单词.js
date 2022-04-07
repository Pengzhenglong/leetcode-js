// 重新排列句子中的单词。
// 「句子」是一个用空格分隔单词的字符串。给你一个满足下述格式的句子 text :

// 句子的首字母大写
// text 中的每个单词都用单个空格分隔。
// 请你重新排列 text 中的单词，使所有单词按其长度的升序排列。如果两个单词的长度相同，则保留其在原句子中的相对顺序。

// 请同样按上述格式返回新的句子。
var arrangeWords = function (text) {
  let newArr = text.split(' ');
  let newArr1 = newArr.sort((a, b) => {
    return a.length - b.length;
  })
  console.log(newArr1);
  let first = newArr1[0][0].toUpperCase()
  console.log(newArr1.join(' ').toLowerCase());
  console.log(newArr1.join(' ').toLowerCase().slice(1));
  let result = first + newArr1.join(' ').toLowerCase().slice(1)
  console.log(result);
  return result
}
arrangeWords("Leetcode is cool")