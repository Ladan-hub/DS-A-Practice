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

// How will you implement stack and queue with JavaScript?

var myStack = [];

//push
myStack.push(1);
myStack.push(2);
myStack.push(3);

//pop
myStack.pop(); //3
myStack.pop(); //2
myStack.pop(); //1



var myQueue = [];

//push
myQueue.push(1);
myQueue.push(2);
myQueue.push(3);

//pop
myQueue.shift(); //1
myQueue.shift(); //2
myQueue.shift(); //3


// How will you create a linked list in JavaScript?

function LinkedList(){  
  this.head = null;
}


// to create add elements, will use a push method in the prototype of the object.

LinkedList.prototype.push = function(val){
  var node = {
     value: val,
     next: null
  }
  if(!this.head){
    this.head = node;      
  }
  else{
    current = this.head;
    while(current.next){
      current = current.next;
    }
    current.next = node;
  }
}

// create a linked list and push values in it 

var sll = new LinkedList();

//push node
sll.push(2);
sll.push(3);
sll.push(4);

//check values by traversing LinkedList 
sll.head; //Object {data: 2, next: Object}
sll.head.next; //Object {data: 3, next: Object}
sll.head.next.next; //Object {data: 4, next: null}
        
//Given a singly linked list, find the middle of the linked list. For example, if the given linked list is 1->2->3->4->5 then the output should be 3. 
// If there are even nodes, then there would be two middle nodes, we need to print the second middle element. 
// For example, if the given linked list is 1->2->3->4->5->6 then the output should be 4. 


class Node {
  constructor() {
    this.data = null;
    this.next = null;
  }
}
 
class NodeOperation {
  // Function to add a new node
  pushNode(headRef, dataVal) {
    // Allocate node
    const newNode = new Node();
    // Put in the data
    newNode.data = dataVal;
    // Link the old list of the new node
    newNode.next = headRef[0];
    // move the head to point to the new node
    headRef[0] = newNode;
  }
}
 
// Driver code
const head = [null];
const temp = new NodeOperation();
for (let i = 5; i > 0; i--) {
  temp.pushNode(head, i);
}
const v = [];
let curr = head[0];
while (curr !== null) {
  v.push(curr.data);
  curr = curr.next;
}
var middle = Math.floor(v.length / 2);
console.log("Middle Value Of Linked List is : " + v[middle]);
