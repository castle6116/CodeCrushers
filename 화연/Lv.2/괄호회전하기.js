/**
 * [stack]
 * https://school.programmers.co.kr/learn/courses/30/lessons/76502
 * @author HwaYeon
 * @param {*} s 
 * @returns 
 */
function solution(s) {
    let answer = 0;
    const newS = s.repeat(2);
    const S_LENGTH = s.length;
    const parObj = {
        '[': ']',
        '(': ')',
        '{': '}',
    }
    for(let i = 0; i < S_LENGTH; i++) {
        const rotateS = newS.slice(i, i + S_LENGTH);
        let stackPar = [];
        for(let j = 0; j < S_LENGTH; j++) {
            stackPar.push(rotateS[j]);
            const stackL = stackPar.length;
            if(j < 1) {
                continue;
            }
            if(parObj[stackPar[stackL - 2]] === stackPar[stackL - 1]) {
                stackPar.pop();
                stackPar.pop();
            }
        }
        if(stackPar.length === 0) {
            answer++;
        }
    }
    return answer;
}