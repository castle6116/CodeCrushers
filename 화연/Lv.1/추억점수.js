/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/176963
 * @param {*} name 
 * @param {*} yearning 
 * @param {*} photo 
 * @returns 
 */
function solution(name, yearning, photo) {
  let answer = [];
  let scoreObj = {};
  for(let i = 0; i < name.length; i++) {
      scoreObj[name[i]] = yearning[i];
  }
  for(let i = 0; i < photo.length; i++) {
      let totalScore = 0;
      for(let j = 0; j < photo[i].length; j++) {
          const thisname = photo[i][j];
          if(scoreObj[thisname] !== undefined) {
              totalScore += Number(scoreObj[thisname]);
          }
      }
      answer.push(totalScore);
  }
  return answer;
}