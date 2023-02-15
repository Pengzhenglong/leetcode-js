var removeNthFromEnd = function(head, n) {
           let  ret = new  ListNode(0,head),
            slow=fast=ret;
            while(n--)  fast=fast.next;
            while(fast.next!==null){
                fast = fast.next;
                slow=slow.next;
            }
            slow.next =slow.next.next;
            return  ret.next;   
};
