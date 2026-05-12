class Node {
    constructor(val) {
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

    get(index) {
        var cur = this.left.next
        while (cur && index > 0) {
            cur = cur.next
            index -= 1
        }
        if (cur && cur != this.right && index === 0) {
            return cur.val
        }
        return -1
    }

    insertHead(val) {
        const node = new Node(val)
        var next = this.left.next
        var prev = this.left
        prev.next = node
        node.next = next
        node.prev = prev
        next.prev = node
    }

    insertTail(val) {
        const node = new Node(val)
        var next = this.right
        var prev = this.right.prev
        prev.next = node
        node.next = next
        node.prev = prev
        next.prev = node
    }

    remove(index) {
        let cur = this.left.next
        while (cur !== this.right && index > 0) {
            cur = cur.next
            index--
        }
        if (cur === this.right || index !== 0) {
            return false
        }
        let prev = cur.prev
        let next = cur.next
        prev.next = next
        next.prev = prev
        return true
    }

    getValues() {
        let result = []
        var cur = this.left.next
        while (cur !== this.right) {
            result.push(cur.val)
            cur = cur.next
        }
        return result
    }
}