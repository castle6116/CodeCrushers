/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/42583#
 * @param {number} bridge_length
 * @param {number} weight
 * @param {number[]} truck_weights
 * @returns
 */
function solution(bridge_length, weight, truck_weights) {
  let answer = 0;
  let total_weight = 0;
  const bridge = new Array(bridge_length).fill(0);
  let i = 0;
  while (true) {
    const truck = truck_weights[i];
    total_weight -= bridge[0];
    if (total_weight + truck <= weight) {
      total_weight += truck;
      bridge.push(truck);
      i++;
    } else {
      bridge.push(0);
    }
    bridge.shift();
    answer++;
    if (total_weight === 0) {
      break;
    }
  }

  return answer;
}
