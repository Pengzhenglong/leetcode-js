function loopString(str) {
  let index = 0
  // 闭包
  return () => {
    const res = str[index]
    index = (index + 1) % str.length
    return res
  }
}

const bar2 = loopString('bar')

