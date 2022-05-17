// Basic linked list example
// const node1 = {
//   data: 100
// };
// const node2 = {
//   data: 200
// };

// node1.next = node2;

// Creating linked list using class

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Insert at first node
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  // Insert at last

  insertLast(data) {
    let node = new Node(data);
    let current;
    // if empty make it head
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }
  // Get at Index

  // Insert at Index
  insertAt(data, index) {
    // If index is out of range.
    if (index > 0 && index > this.size) {
      return;
    }
    // If first index
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const node = new Node(data);
    let current, previous;
    current = this.head;
    let count = 0;
    while (count < index) {
      previous = current; // node before index
      count ++;
      current = current.next; // node after index 
    }

    node.next = current;
    previous.next = current;
    this.size ++;
  }

  // Remove at Index
  //Print list data
  printListData() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}
const ll = new LinkedList();
ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertLast(400);
console.log(ll);

ll.printListData();
