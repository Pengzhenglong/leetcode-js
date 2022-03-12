// 防抖
function debounce(fn, delay) {
  var timer = null;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(this)
    }, delay);
  }
}
// 使用
document.getElementById('btn').onclick = debounce(function () {
  console.log('按钮被点击了' + Date.now());
}, 1000);

// 节流
// 节流
function throttle(fn, delay) {
  let flag = true;
  return function () {
    if (flag) {
      setTimeout(() => {
        fn.call(this);
        flag = true;
      }, delay);
    }
    flag = false;
  };
}
window.onscroll = throttle(function () {
  console.log("hello  world");
}, 5000);