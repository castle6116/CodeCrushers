/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/42626
 * @param {number[]} scoville
 * @param {number} K
 * @returns
 */
function solution(scoville, K) {
  let answer = 0;
  const len = scoville.length;

  const heapSt = (arr, i, size) => {
    let smallest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    if (left < size && arr[left] < arr[smallest]) smallest = left;
    if (right < size && arr[right] < arr[smallest]) smallest = right;
    if (smallest !== i) {
      [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
      heapSt(arr, smallest, size);
    }
  };

  for (let i = Math.floor(len / 2); i >= 0; i--) {
    heapSt(scoville, i, len);
  }

  while (scoville[0] < K) {
    if (scoville.length < 2) return -1;
    const a = scoville[0];
    [scoville[0], scoville[scoville.length - 1]] = [
      scoville[scoville.length - 1],
      scoville[0],
    ];
    scoville.pop();
    heapSt(scoville, 0, scoville.length);
    const b = scoville[0];
    scoville[0] = a + b * 2;
    heapSt(scoville, 0, scoville.length);
    answer++;
  }

  return answer;
}

/**
 * solution 2
 * 우선 순위 큐 이용
 */
class Heap {
  constructor() {
    this.items = [];
  }
  swap(index1, index2) {
    [this.items[index1], this.items[index2]] = [
      this.items[index2],
      this.items[index1],
    ];
  }
  insert(val) {
    this.items.push(val);
    let index = this.items.length - 1;
    while (true) {
      let parentIndex = Math.floor((index - 1) / 2);
      //부모보다 자식이 작으면 자리 바꾸기
      if (this.items[index] < this.items[parentIndex]) {
        this.swap(index, parentIndex);
      } else break;
      index = parentIndex;
      if (index < 1) break;
    }
  }
  removeMin() {
    this.items[0] = this.items[this.items.length - 1];
    this.items.pop();
    if (this.items.length <= 1) return;

    let index = 0;
    while (true) {
      //두 자식중 작은값의 자식 인덱스 찾기
      let lChildIndex = index * 2 + 1;
      let rChildIndex = index * 2 + 2;
      let minIndex = index;
      if (
        lChildIndex < this.items.length &&
        this.items[minIndex] > this.items[lChildIndex]
      ) {
        minIndex = lChildIndex;
      }
      if (
        rChildIndex < this.items.length &&
        this.items[minIndex] > this.items[rChildIndex]
      ) {
        minIndex = rChildIndex;
      }
      //위치 바꾸기
      if (minIndex !== index) {
        this.swap(index, minIndex);
        index = minIndex;
      } else break;
    }
  }
}

function solution(scoville, K) {
  let answer = 0;

  //힙생성과 scoville 힙에 저장
  let scovilleHeap = new Heap();
  scoville.forEach((el) => {
    scovilleHeap.insert(el);
  });

  //스코빌 지수 설정
  while (true) {
    if (scovilleHeap.items[0] >= K) break;
    if (scovilleHeap.items.length <= 1) {
      answer = -1;
      break;
    }

    const low1 = scovilleHeap.items[0];
    scovilleHeap.removeMin();
    const low2 = scovilleHeap.items[0];
    scovilleHeap.removeMin();
    scovilleHeap.insert(low1 + low2 * 2);

    answer++;
  }

  return answer;
}
