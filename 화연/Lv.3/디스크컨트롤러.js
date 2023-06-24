/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/42627
 * @author HwaYeon
 * @param {number[][]} jobs 
 * @returns 
 */
function solution(jobs) {
  let i = 0;
  let time = 0;
  let sum = 0;
  let priorityQueue = []
  jobs.sort(([a, ],[b, ]) => a - b)

  while(jobs.length > i || priorityQueue.length !== 0) {
    if(jobs.length > i && time >= jobs[i][0]) {
      priorityQueue.push(jobs[i++]);
      priorityQueue.sort(([, a],[, b]) => a - b);
      continue;
    }
    if(priorityQueue.length !== 0 ) {
      time += priorityQueue[0][1];
      sum += time - priorityQueue[0][0];

      priorityQueue.shift();
    } else {
      time = jobs[i][0];
    }
  }

  return Math.floor(sum / jobs.length);
}