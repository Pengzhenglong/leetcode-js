function  Fibonacci(n){
  if(n===0||n===1){
    return  n 
  }
  return   Fibonacci(n-1)+Fibonacci(n-2)
}

module.exports={
  Fibonacci 
}