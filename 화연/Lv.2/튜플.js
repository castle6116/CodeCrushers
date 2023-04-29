/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/64065
 * @author HwaYeon
 * @param {string} s 
 * @returns 
 */
function solution(s) {
  let answer = [];
  const sArr = s.slice(2, s.length - 2).split("},{");
  const newSArr = sArr.sort((a, b) => a.length - b.length).map(a => a.split(","));
  for(let i = 0; i < newSArr.length; i++) {
    newSArr[i].forEach(a => {
      if(!answer.includes(+a)) answer.push(+a)
    }) 
  }
  return answer;
}


/**
 * [Set 이용한 풀이]
 * 집합의 사이즈가 1인 애가 맨 첫번째
 * 2인 애에서 1번째 원소를 빼면 걔가 두번째
 * 3인 애에서 2번원소를 빼면 걔가 3번째
 * n 사이즈 집합에서 n-1 사이즈 집합을 빼면 그 원소가 n번째 튜플의 원소
 * 문자열을 배열로 변경
 * 배열의 사이즈 순으로 정렬
 * n 배열의 원소와 n + 1 배열의 원소를 비교해서 남는 애를 임시 배열에 저장
 * 이걸 맨 끝까지 반복, 만약 배열의 마지막 원소일 경우 배열 사이즈도1 값도 1이므로 얘가 임시배열의 맨 첫번째여야함
 * 임시배열은 큐 형태로, 앞쪽부터 자료를 넣고 뒤쪽으로 민다.
 * @param {string} s 
 * @returns 
 */
function solution(s) {
  let answer = [];
  let newArr = JSON.parse(s.replace(/{/g,'[').replace(/}/g,']'));
  newArr.sort((a, b) => {return a.length - b.length});
  let temp = [];
  for(let i = 0; i < newArr.length; i++) {
    for(let j = 0; j < newArr[i].length; j++) {
      temp.push(newArr[i][j]);
    }
  }
  answer = [...new Set(temp)];
  return answer;
}