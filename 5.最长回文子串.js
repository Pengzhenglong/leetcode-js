// 从中间往两边扩散的思想
var   longestPalindrome =function(s){
  if(s.length<2){
    return  s;
  }
  let   start=0;
  let  maxlength=1;
  //[a,b,a]
  function  expandAroundCounter(left,right){
    while(left>=0&&right<s.length&& s[left]===s[right]){
      if(right-left+1>maxlength){
        maxlength=right-left+1;
        start=left
      }
      left--;
      right++;
    }
  }
  for(let i =0;i<s.length;i++){
    // 检查两遍，[b,a,b,a,d] [c,a,b,b,a,d]两种情况
    expandAroundCounter(i-1,i+1);
    expandAroundCounter(i,i+1);
  }
  return  s.substring(start,start+maxlength)
}