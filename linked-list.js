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
  getAt(index) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count === index) {
        console.log('data at given index -', current.data);
      }
      count++;
      current = current.next;
    }
    return null;
  }

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
    // for other cases
    const node = new Node(data);
    let current, previous;
    current = this.head;
    let count = 0;
    while (count < index) {
      previous = current; // node before index
      count++;
      current = current.next; // node after index
    }

    node.next = current;
    previous.next = node;
    this.size++;
  }

  // Remove at Index
  removeAt(index) {
    if (index > 0 && index > this.size) {
      return;
    }
    let current = this.head;
    let previous;
    let count = 0;
    // Remove first
    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    this.size--;
  }

  //Print list data
  printListData() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }

  // clear list
  clearList() {
    this.head = null;
    this.size = 0;
  }
}

const ll = new LinkedList();
ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
// ll.insertLast(400);
ll.insertAt(500, 1);
ll.getAt(1);
ll.removeAt(1);

// console.log(ll);
ll.clearList();
ll.printListData();
