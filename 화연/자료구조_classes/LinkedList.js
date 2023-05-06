class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  find(value) {
    let currNode = this.head;
    while(currNode.value !== value) {
      currNode = currNode.next;
    }
    return currNode;
  }
  append(newValue) {
    const newNode = new Node(newValue);
    if(this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
  insert(node, newValue) {
    const newNode = new Node(newValue);
    newNode.next = node.next;
    node.next = newNode;
  }
  remove(value) {
    let prevode = this.head;
    while(prevNode.next.value !== value) {
      prevNode = prevNode.next;
    }
    if(prevNode.next !== null) {
      prevNode.next = prevode.next.next;
    }
  }
  display() {
    let currNode = this.head;
    let displayString = "[";
    while(currNode !== null) {
      displayString += `${currNode.value}, `;
      currNode = currNode.next;
    }
    displayString = displayString
      .substring(0, displayString.length - 2);
    displayString += "]"; 
    console.log(displayString);
  }
}

const linkedList = new SinglyLinkedList();
linkedList.append(1); 
linkedList.append(2); 
linkedList.append(3); 
linkedList.append(5); 
linkedList.display();
console.log(linkedList.find(3));
linkedList.remove(3); 
linkedList.display();
linkedList.insert(linkedList.find(2), 10);
linkedList.display();



// output
// [1, 2, 3, 5, ]
// Node { value: 3, Next: Node { value: 5, next: null } }
// [1, 2, 5, ]
// [1, 2, 10, 5, ]