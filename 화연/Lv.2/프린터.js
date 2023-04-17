/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/42587
 * @author HwaYeon
 * @param {*} priorities 
 * @param {*} location 
 * @returns 
 */
function solution(priorities, location) {
  let answer = 0;
  const PRI_SIZE = priorities.length;
  const priorArr = [...priorities].sort((a, b) => b - a);
  let maxIdx = 0; // 최댓값 순서
  let i = 0; // priorities 순서
  let idx = 0; // 대기목록 순서
  while(priorities.length > 0) {  
    const value = priorities[i];
    delete priorities[i];
    if(value < priorArr[maxIdx]) {
      priorities[PRI_SIZE + idx] = value;
      if(i === location) {
        location = PRI_SIZE + idx;
      }
      idx++;
    } else {
      maxIdx++;
      if(i === location) {
        answer = maxIdx;
        break;
      }
    }
    i++;
  }
  return answer;
}



/**
 * 연결 리스트 Object를 이용한 풀이
 */
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  } 
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  
  enqueue(newValue) {
    const newNode = new Node(newValue);
    if(this.head === null) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
  
  dequeue() {
    const value = this.head.value;
    this.head = this.head.next;
    return value;
  }
  
  peek() {
    return this.head.value;
  }
}

function solution(priorities, location) {
  const queue = new Queue();
  for(let i = 0; i < priorities.length; i++) {
    queue.enqueue([priorities[i], i]);
  }
  
  priorities.sort((a, b) => b - a);
  
  let count = 0;
  while(true) {
    const currentValue = queue.peek();
    if(currentValue[0] < priorities[count]) {
      queue.enqueue(queue.dequeue());
    } else {
      const value = queue.dequque();
      count += 1;
      if(location === value[1]) {
        return count;
      }
    }
  }
  
  return count;
}

