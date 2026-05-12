class Node {
    constructor(val){
        this.val = val
        this.next = null
        this.prev = null
    }
}

class LinkedList {
    constructor() {
        this.left = new Node(0)
        this.right = new Node(0)
        this.left.next = this.right
        this.right.prev = this.left
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
      var cur = this.left.next
      while (cur && index > 0){
        cur = cur.next
        index -= 1
      } 
      if (cur && cur != this.right && index === 0) {
        return cur.val
      }
      return -1
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
        const node = new Node(val)
        var next = this.right
        var prev = this.right.prev
        next.prev = node
        node.prev = next
        node.prev = prev
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {
        const node = new Node(val)
        var next = this.left.next
        var prev = this.left
        next.prev = node
        node.prev = next
        node.prev = prev
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {}

    /**
     * @return {number[]}
     */
    getValues() {
        for (let i=this.left.next; i<this.right; i++){
            return i
        }
    }
}
