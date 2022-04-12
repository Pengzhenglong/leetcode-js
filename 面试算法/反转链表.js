// 反转链表
function reverseList(head) {
    if (!head || !head.next) {
        return head;
    }
    let pre = null;
    let cur = head;
    while (cur) {
        let next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }
    return pre;
}