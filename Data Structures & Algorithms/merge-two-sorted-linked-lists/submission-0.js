/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let arr = []

        while (list1 !== null){
            arr.push(list1.val)
            list1 = list1.next
        }

        while (list2 !== null){
            arr.push(list2.val)
            list2 = list2.next
        }

        arr.sort()

        let dummy = new ListNode(-1)
        let curr = dummy

        for (let value in arr){
            curr.next = new ListNode(value)
            curr = curr.next
        }

        return dummy.next
    }
}
