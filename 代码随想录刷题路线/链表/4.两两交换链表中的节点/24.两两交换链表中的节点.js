var swapPairs = function(head) {
   let ret  = new  ListNode(0,head),temp=ret;
   console.log(ret);
   while(temp.next&&temp.next.next){
    let  cur = temp.next.next,pre=temp.next;
    console.log(cur);
    console.log(pre);
    pre.next=cur.next;
    cur.next=pre;
    temp.next=cur;
    temp=pre;
   }
   return  ret.next;
};
swapPairs([1,2,3,4]);

var  swapPairs  = function(head){
    let  dummy = new  ListNode();
    dummy.next= head;
    let  current  = dummy;
    while(current.next!==null&&current.next.next!==null){
      let  n1=current.next;
      let  n2=current.next.next;
      current.next=n2;
      n1.next=n2.next;
      n2.next=n1;
      current=n1;
    }
    return  dummy.next;
  }