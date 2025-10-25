class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }
  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    let temp = this.head;
    let pre = this.head;
    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }
    this.tail = pre;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }
  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  shift() {
    if (!this.head) return undefined;
    let temp = this.head;
    this.head = this.head.next;

    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    temp.next = null;
    return temp;
  }
  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  } //get method to retrieve a node by its index
}
const myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(4);
myLinkedList.push(6);
console.log('myLinkedList: ', myLinkedList);
// console.log('Popped Node:', myLinkedList.pop());
// console.log(myLinkedList);
console.log('Unshifted means adding at the beginning:');
myLinkedList.unshift(0);
console.log('myLinkedList after unshift:', myLinkedList);
console.log('Shifted Node:', myLinkedList.shift());
console.log('myLinkedList after shift:', myLinkedList);
console.log('Get Node at index 2:', myLinkedList.get(8));//undefined
