/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/154538
 * @param {number} x
 * @param {number} y
 * @param {number} n
 * @returns
 */
function solution(x, y, n) {
  if (x === y) return 0;

  const dp = Array(y + 1).fill(0);
  for (let i = 1; i <= y - x; i++) {
    const realNum = y - i;
    let compare = y;
    if (realNum + n <= y) {
      compare = i - n;
      if (dp[compare] !== 0 || compare === 0) {
        dp[i] =
          dp[i] === 0 ? dp[compare] + 1 : Math.min(dp[i], dp[compare] + 1);
      }
    }
    if (realNum * 2 <= y) {
      compare = y - realNum * 2;
      if (dp[compare] !== 0 || compare === 0) {
        dp[i] =
          dp[i] === 0 ? dp[compare] + 1 : Math.min(dp[i], dp[compare] + 1);
      }
    }
    if (realNum * 3 <= y) {
      compare = y - realNum * 3;
      if (dp[compare] !== 0 || compare === 0) {
        dp[i] =
          dp[i] === 0 ? dp[compare] + 1 : Math.min(dp[i], dp[compare] + 1);
      }
    }
  }
  return dp[y - x] === 0 ? -1 : dp[y - x];
}

// queue를 이용한 풀이
function solution2(x, y, n) {
  const queue = [[x, 0]];
  let [l, r] = [0, 1];
  let answer = Infinity;

  const done = {};
  while (l < r) {
    const [num, count] = queue[l++];
    if (done[num] || num > y) continue;
    if (num === y) {
      answer = Math.min(answer, count);
      continue;
    }
    done[num] = true;

    queue[r++] = [num * 3, count + 1];
    queue[r++] = [num * 2, count + 1];
    queue[r++] = [num + n, count + 1];
  }

  return answer === Infinity ? -1 : answer;
}

// Map을 이용한 풀이
function solution(x, y, n) {
  const map = new Map([[x, 0]]);
  for (let i = x; i < y; i++) {
    if (map.has(i)) {
      const val = map.get(i);
      map.set(i + n, Math.min(val + 1, map.get(i + n) || Infinity));
      map.set(i * 2, Math.min(val + 1, map.get(i * 2) || Infinity));
      map.set(i * 3, Math.min(val + 1, map.get(i * 3) || Infinity));
    }
  }
  if (map.has(y)) {
    return map.get(y);
  }
  return -1;
}
