/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

var getListLen = function (head) {
    let len = 0, cur = head;
    while (cur) {
        len++;
        cur = cur.next;
    }
    return len;
}
var getIntersectionNode = function (headA, headB) {
    let curA = headA, curB = headB;
    lenA = getListLen(headA);  //求链表A的长度
    lenB = getListLen(headB);
    if (lenA < lenB) {
        [curA, curB] = [curB, curA];
        [lenA, lenB] = [lenB, lenA];
    }
    let  i= lenA-lenB;
    while (i-- > 0) {
       curA=curA.next;
    }
    while(curA  &&curA!==curB){
        curA=curA.next;
        curB=curB.next;
    }
    return  curA;
};
// @lc code=end

