/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/12978
 * Solution1
 * 최소힙, 다익스트라를 이용한 풀이
 */
class MinHeap {
  constructor() {
    this.heap = [null];
  }

  push(value) {
    this.heap.push(value);
    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);

    while (parentIndex !== 0 && this.heap[parentIndex].cost > value.cost) {
      this._swap(parentIndex, currentIndex);

      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }

  pop() {
    if (this.isEmpty()) return;
    if (this.heap.length === 2) return this.heap.pop();

    const returnValue = this.heap[1];
    this.heap[1] = this.heap.pop();

    let currentIndex = 1;
    let leftIndex = 2;
    let rightIndex = 3;
    while (
      (this.heap[leftIndex] &&
        this.heap[currentIndex].cost > this.heap[leftIndex].cost) ||
      (this.heap[rightIndex] &&
        this.heap[currentIndex].cost > this.heap[rightIndex].cost)
    ) {
      if (this.heap[leftIndex] === undefined) {
        // 왼쪽 정점이 없을 경우
        this._swap(rightIndex, currentIndex);
      } else if (this.heap[rightIndex] === undefined) {
        // 오른쪽 정점이 없을 경우
        this._swap(leftIndex, currentIndex);
      } else if (this.heap[leftIndex].cost > this.heap[rightIndex].cost) {
        this._swap(rightIndex, currentIndex);
      } else if (this.heap[leftIndex].cost <= this.heap[rightIndex].cost) {
        this._swap(leftIndex, currentIndex);
      }
      leftIndex = currentIndex * 2;
      rightIndex = currentIndex * 2 + 1;
    }

    return returnValue;
  }

  isEmpty() {
    return this.heap.length === 1;
  }

  _swap(a, b) {
    // 편의를 위해 배열의 요소를 swap하는 함수 작성
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }
}
function dijkstra(road, N) {
  const heap = new MinHeap(); // 우선순위 큐(힙)
  heap.push({ node: 1, cost: 0 }); // 1번 마을부터 시작

  const dist = [...Array(N + 1)].map(() => Infinity); // 계산하기 편하도록 N+1 길이만큼 리스트 생성
  dist[1] = 0; // 1번 마을은 무조건 거리가 0

  while (!heap.isEmpty()) {
    // heap이 비어있지 않다면
    // cost가 가장 낮은 정점을 뽑는다.
    const { node: current, cost: currentCost } = heap.pop();

    for (const [src, dest, cost] of road) {
      // 루프를 돌며 시작점, 도착점, 비용을 꺼낸다
      const nextCost = cost + currentCost; // 비용

      // 양방향을 고려하여 작성
      if (src === current && nextCost < dist[dest]) {
        // src가 현재 선택된 정점이면서 목적지까지 더 저렴할 경우
        dist[dest] = nextCost; // 거리를 갱신한다.
        heap.push({ node: dest, cost: nextCost }); // push
      } else if (dest == current && nextCost < dist[src]) {
        // dest가 현재 선택된 정점이면서 목적지까지 더 저렴할 경우
        dist[src] = nextCost; // 거리를 갱신한다.
        heap.push({ node: src, cost: nextCost }); // push
      }
    }
  }

  return dist; // 1번 마을부터 각 마을까지의 최단 거리
}
/**
 * @param {number} N
 * @param {number[][]} road
 * @param {number} K
 * @returns {number}
 */
function solution(N, road, K) {
  const dist = dijkstra(road, N);
  return dist.filter((x) => x <= K).length;
}

/**
 * Solution2
 * graph를 만든 후 dfs를 이용한 풀이
 * @param {number} N
 * @param {number[][]} road
 * @param {number} K
 * @returns {number}
 */
const solution = (N, road, K) => {
  const graph = [...Array(N + 1)].map((m) => []);
  road.forEach((r) => {
    graph[r[0]].push([r[1], r[2]]);
    graph[r[1]].push([r[0], r[2]]);
  });

  const weight = new Array(graph.length).fill(Infinity);

  const dfs = function (start, w) {
    if (weight[start] < w) {
      return;
    } else {
      weight[start] = w;
      for (let item of graph[start]) {
        const [a, b] = item;
        dfs(a, w + b);
      }
    }
  };

  dfs(1, 0);

  return weight.filter((w) => w <= K).length;
};

/**
 * Solution3
 * @param {number} N
 * @param {number[][]} road
 * @param {number} K
 * @returns {number}
 */
function solution(N, road, K) {
  const totalDist = new Array(N + 1).fill(Infinity);
  const adj = Array.from({ length: N + 1 }, () => []);

  road.forEach(([a, b, c]) => {
    adj[a].push({ to: b, dist: c });
    adj[b].push({ to: a, dist: c });
  });

  const queue = [{ to: 1, dist: 0 }];
  totalDist[1] = 0;

  while (queue.length) {
    let { to, dist } = queue.pop();

    adj[to].forEach((step) => {
      if (totalDist[step.to] > totalDist[to] + step.dist) {
        totalDist[step.to] = totalDist[to] + step.dist;
        queue.push(step);
      }
    });
  }

  return totalDist.filter((dist) => dist <= K).length;
}
