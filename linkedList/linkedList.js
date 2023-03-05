// Write a function that creates a linked list with a single node.

class ListNode {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  function createLinkedList(val) {
    return new ListNode(val);
  }
