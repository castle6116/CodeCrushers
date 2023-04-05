/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/161989
 * max : 2.70ms
 * @author HwaYeon
 * @param {*} n 
 * @param {*} m 
 * @param {*} section 
 * @returns 
 */
function solution(n, m, section) {
  if(section.length === 1 || 
    section[section.length - 1] < section[0] + m) {
    return 1;
  } else {
    let answer = 0;
    let front = 0;
    const last = section[section.length - 1];
    for(let i = 0; i < section.length; i++) {
      if(i === 0) {
        front = section[i];
      } else {
        if(section[i] < front + m) {
          continue;
        } 
        front = section[i];
      }
      answer += 1;
      if(front + m > last) {
        return answer;
      }
    }
    return answer; 
  }
}


/**
 * max: 160.40ms
 * @author ENZYMATIC
 * @param {*} n 
 * @param {*} m 
 * @param {*} sections 
 * @returns 
 */
function solution2(n, m, sections) {
  var answer = 0;
  var painted = 0;
  for(var section of sections) {
    if(painted < section) {
      answer++;
      painted = section+m-1;
    }
  }
  return answer;
}

/**
 * max: 3379.01ms
 * @author Hankpkj
 * @param {*} n 
 * @param {*} m 
 * @param {*} section 
 * @returns 
 */
function solution3(n, m, section) {
  var answer = 0;

  for (let i = 1; i < n+1; i++) {
    if (section.includes(i)) {
      answer++;
      i += (m - 1);
    }
  }
  return answer;
}