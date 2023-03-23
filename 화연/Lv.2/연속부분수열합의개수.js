/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/131701
 * @author HwaYeon
 * @param {*} elements 
 * @returns 
 */
function solution(elements) {
    const arr = [...elements, ...elements];
    let eleMap = new Map();
    for(let i = 1; i <= elements.length; i++) {
        for(let j = 0; j < elements.length + i; j++) {
            let result = arr.slice(j, j+i).reduce((a,b) => a+b, 0);
            eleMap.set(result);
        }
    }
    return eleMap.size;
}