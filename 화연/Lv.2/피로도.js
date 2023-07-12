/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/87946
 * @param {number} k 
 * @param {number[][]} dungeons 
 * @returns 
 */
function solution(k, dungeons) {
  const handleSort2 = (a, b) => {
    if(a[1] > b[1]) {
      return 1;
    } else if (a[1] < b[1]) {
      return -1;
    } else {
      if(b[0] > a[0]) {
        return 1;
      } else {
        return -1;
      }
    }
  }
  const handleSort1 = (a, b) => {
    const a1 = a[0] - a[1];
    const b1 = b[0] - b[1];
    if(b1 > a1) {
      return 1;
    } else if (a1 > b1) {
      return -1;
    } else {
      return handleSort2(a, b);
      }
  }
  const getDungeons = (sortCase) => {
    const arr = [...dungeons].sort(sortCase);
    let answer = 0;
    let kn = k;
    for(let i = 0; i < dungeons.length; i++) {
      if(kn >= arr[i][0]) {
        kn -= arr[i][1];
        answer++
      } else {
        continue;
      }
    }
    return answer;
  }
  return Math.max(getDungeons(handleSort1), getDungeons(handleSort2));
}



/**
 * 아!! 완전탐색 공부하자!!!
 * @param {*} k 
 * @param {*} dungeons 
 * @returns 
 */
function solution(k, dungeons) {
  if (dungeons.length <= 0) return 0;
  let maxDungeons = 0;
  for (let i = 0; i < dungeons.length; i++) {
    if (k >= dungeons[i][0]) {
      console.log("k >= dungeons[i][0]");
      let n = solution(
        k - dungeons[i][1], 
        dungeons.slice(0, i).concat(dungeons.slice(i + 1))
      );
      if (n + 1 > maxDungeons) {
        maxDungeons = n + 1;
      }
      if (maxDungeons >= dungeons.length) {
        return maxDungeons;
      };
    }
  }
  console.log("count: ", count, ", maxDungeons: ", maxDungeons);
  count++;
  return maxDungeons;
}