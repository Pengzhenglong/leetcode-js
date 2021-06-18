// var addTwoNumbers = function (l1, l2) {
//   let dummy = new ListNode();
//   let curr = dummy;
//   let carry = 0;
//   while (l1 !== null || l2 !== null) {
//     let sum = 0;
//     if (l1 !== null) {
//       sum += l1.val;
//       l1 = l1.next;
//     }
//     if (l2 !== null) {
//       sum += l2.val;
//       l2 = l2.next;
//     }
//     sum += carry;
//     curr.next = new ListNode(sum % 10)
//     carry = Math.floor(sum / 10);
//     curr = curr.next;
//   }
//   if (carry > 0) {
//     carry.next = new ListNode(carry);
//   }
//   return dummy.next;
// }



var  addTwoNumbers  =function(l1,l2){
  let  addOne=0;
  let  sum =new  ListNode('0');
  let  head=sum;
  while(addOne ||l1||l2){
    let  val1=l1!==null?l1.val:0;
    let  val2=l2!==null?l2.val:0;
    let  r1=val1+val2+addOne;
    addOne =r1>=10?1:0;
    sum.next=new ListNode(r1%10)
    sum=sum.next;
    if(l1){
      l1=l1.next;
    }
    if(l2){
      l2=l2.next;
    }
  }
  return  head.next;
}