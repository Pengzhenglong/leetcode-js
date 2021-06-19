/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var reverseList = function (head) {
  let next = null;
  let curr = head;
  let prev=null;
  while(curr){
    // next= curr.next;
    // curr.next=prev;
    // prev=curr;
    // curr=next;
    // es6解构数组
    [curr.next,prev,curr]=[prev,curr,curr.next]
    // [prev,curr.next,curr]=[curr,prev,curr.next]
  }
  return  prev; 
}