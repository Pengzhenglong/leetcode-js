/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
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
 * @param {number} val
 * @return {ListNode}
 */
 var removeElements = function(head, val) {
     const  ret = new  ListNode(0,head)
    // 赋值  复杂数据类型 指向同一个存储空间 无论哪个对象发生改变 其实都是改变堆中的数据
     let  cur = ret;
     while(cur.next){
        if(cur.next.val===val){
            cur.next=cur.next.next;
            continue;
        }
        cur= cur.next
     }
     return  ret.next
};
// @lc code=end

