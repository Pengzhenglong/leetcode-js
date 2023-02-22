/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
 * @param {ListNode} head
 * @return {ListNode}
 */
// 两种循环实现方式
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
//  其实两个节点出发的一致 然后一个走得快一个走得慢才可以 你这个fast设置的就比slow快一步
//无论走的快慢 我们一定会遇见 我们遇见我到家  但是我向你走来的步伐和你像我走来的步伐一定相等
//我们俩出发一致 步伐不同才有可能遇见滴
//你第一步就比我跑得快了 那不行
var detectCycle = function (head) {
    if (!head) return null;
    let fast = head, slow = head, isCycle = false;
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
        if (slow === fast) {
            isCycle = true;
            break;
        }
    }
    if (isCycle === false) {
        return null;
    }
    slow = head;
    while (fast !== slow) {
        slow = slow.next;
        fast = fast.next;
    }
    return slow;
};

var detectCycle = function (head) {
    if (!head || !head.next) return null;
    let slow = head.next, fast = head.next.next;
    //   let slow = head, fast = head.next; 你这个好像如果就两个节点的时候 会死循环
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (fast == slow) {//有环
            slow = head;
            while (fast !== slow) {//当n为1时，x=z
                slow = slow.next;
                fast = fast.next;
            }
            return slow;
        }
    }
    return null;
};