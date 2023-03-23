/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/42586
 * @author HwaYeon
 * @param {*} progresses 
 * @param {*} speeds 
 * @returns 
 */
function solution(progresses, speeds) {
    let answer = [];
    let days = Array.from(progresses, (a, i) => Math.ceil((100 - a)/speeds[i]));
    let frontDay = days[0];
    let count = 1;
    for(let i = 1; i < days.length; i++) {
        if(days[i] <= frontDay) {
            count++;
        } else {
            answer.push(count);
            count = 1;
            frontDay = days[i];
        }
        if(i === days.length - 1) {
            answer.push(count);
        }
    }
    return answer;
}


/**
 * 
 * @param {*} progresses 
 * @param {*} speeds 
 * @returns 
 */
function solution2(progresses, speeds) {
    let answer = [0];
    let days = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));
    let maxDay = days[0];

    for(let i = 0, j = 0; i< days.length; i++){
        if(days[i] <= maxDay) {
            answer[j] += 1;
        } else {
            maxDay = days[i];
            answer[++j] = 1;
        }
    }
    return answer;
}
