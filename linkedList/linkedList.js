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


// Write a function that appends a node to the end of a linked list.

// ADD ONE NODE TO THE END 
function appendToList(head, value) {
  
    let node = new listNode(value)
    
    if (!head) {
      return node
    }
    
    let curr = head;
    curr.next = node;
    curr = node
    return head
  }
  
  // const myList = createLinkedList(3)
  // console.log(appendToList(myList, 5))


  // Write a function that deletes a node from a linked list given its value.

  function deleteNode(head, val) {
    if (!head) {
      return null;
    }
    if (head.val === val) {
      return head.next;
    }
    let curr = head;
    while (curr.next) {
      if (curr.next.val === val) {
        curr.next = curr.next.next;
        return head;
      }
      curr = curr.next;
    }
    return head;
  }
