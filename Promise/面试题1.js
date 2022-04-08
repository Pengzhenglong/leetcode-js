// 执行顺序Promise

let promise = new Promise((resolve, reject) => {
  console.log(1);  
 
  throw new Error('error') 
   resolve()
  console.log(2);
})
promise.then(() => {
  console.log(3);
}).catch(() => {
  console.log(4);
})
// 1,4
// 
let promise2 = new Promise((resolve, reject) => {
  console.log(1);  
   resolve()
  throw new Error('error')
  console.log(2);
})
promise2.then(() => {
  console.log(3);
}).catch(() => {
  console.log(4);
})

// 1,3