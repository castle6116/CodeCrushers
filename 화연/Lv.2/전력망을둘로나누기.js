/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/86971
 * @param {number} n
 * @param {number[][]} wires
 * @returns
 */
function solution(n, wires) {
  let answer = n - 2;

  let wireMap = wires.reduce((prev, cur) => {
    prev.set(
      cur[0],
      prev.get(cur[0]) ? [...prev.get(cur[0]), cur[1]] : [cur[1]]
    );
    prev.set(
      cur[1],
      prev.get(cur[1]) ? [...prev.get(cur[1]), cur[0]] : [cur[0]]
    );
    return prev;
  }, new Map());

  function getDiffOfDividedArea(curIndex) {
    let leftConnection = new Set();
    leftConnection.add(wires[curIndex][0], 1);

    for (let v of leftConnection.keys()) {
      wireMap.get(v).forEach((value) => {
        if (value !== wires[curIndex][1]) {
          leftConnection.add(value, 1);
        }
      });
    }

    return Math.abs(n - leftConnection.size * 2);
  }

  for (let i = 0; i < wires.length; i++) {
    answer = Math.min(getDiffOfDividedArea(i), answer);
  }

  return answer;
}
