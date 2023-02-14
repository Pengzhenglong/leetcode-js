/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// 双指针：
var reverseList = function (head) {
    if (!head || !head.next) return head;
    let temp = null, pre = null, cur = head;
    while (cur) {
        temp = cur.next;
        cur.next = pre;
        pre = cur;
        cur = temp;
    }
    // temp = cur = null;
    return pre;
};


// 递归

var  reverse= function(pre,head){
    if(!head)  return  pre;
     const  temp=head.next;
     head.next=pre;
     pre=head;
     return  reverse(pre,temp);
}
var  reverseList = function(head){
     return  reverse(null,head);
}