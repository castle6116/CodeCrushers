/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/17680#
 * @author HwaYeon
 * @param {number} cacheSize 
 * @param {string[]} cities 
 * @returns 
 */
function solution(cacheSize, cities) {
  let answer = 0;
  let firstIdx = 0;
  let cacheArr = [];
  const includes = (idx, city) => {
      for(let i = idx; i < cacheArr.length; i++) {
          if(cacheArr[i] === city) return i;
      }
      return -1;
  };
  for(let i = 0; i < cities.length; i++) {
      const city = cities[i].toUpperCase();
      
      if(includes(firstIdx, city) < 0) {
          answer += 5;
          if(cacheArr.length - firstIdx === cacheSize) firstIdx++;
      } else {
          answer += 1;
          cacheArr.splice(includes(firstIdx, city), 1);
      }
      cacheArr.push(city);
  }
  return answer;
}



/**
 * shift를 썼는데 이게 왜 delete를 쓴 것보다 시간이 빠르지?
 * @param {*} cacheSize 
 * @param {*} cities 
 * @returns 
 */
function solution(cacheSize, cities) {
  let answer = 0;
  let cacheArr = [];
  for(let i = 0; i < cities.length; i++) {
      const city = cities[i].toUpperCase();
      const idx = cacheArr.indexOf(city);
      if(idx < 0) {
          answer += 5;
          if(cacheArr.length === cacheSize) {
              cacheArr.shift();
          }
      } else {
          answer += 1;
          cacheArr.splice(idx, 1);
      }
      cacheArr.push(city);
  }
  return cacheSize === 0 ? cities.length * 5 : answer;
}

// delete 쓴 것
function solution(cacheSize, cities) {
  let answer = 0;
  let firstIdx = 0;
  let cacheArr = [];
  const includes = (idx, city) => {
      for(let i = idx; i < cacheArr.length; i++) {
          if(cacheArr[i] === city) return i;
      }
      return -1;
  };
  for(let i = 0; i < cities.length; i++) {
      const city = cities[i].toUpperCase();
      const idx = cacheArr.indexOf(city);
      if(idx < 0) {
          answer += 5;
          if(cacheArr.length - firstIdx === cacheSize) {
              delete cacheArr[firstIdx];
              firstIdx++;
          }
      } else {
          answer += 1;
          cacheArr.splice(idx, 1);
      }
      cacheArr.push(city);
  }
  return cacheSize === 0 ? cities.length * 5 : answer;
}