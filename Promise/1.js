setTimeout(() => { console.log('a') }
  , 0)

Promise.resolve(1).then((value) => { console.log('b', value) })