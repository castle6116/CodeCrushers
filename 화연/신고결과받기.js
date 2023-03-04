/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/92334
 * @author HwaYeon
 * @param {*} id_list 
 * @param {*} report 
 * @param {*} k 
 * @returns 
 */
function solution(id_list, report, k) {
    let answer = new Array(id_list.length).fill(0);
    let avengers = {};
    const reportTarget = new Set(report);
    for(let rep of reportTarget.keys()) {
        const reportSpl = rep.split(' ');
        if(id_list.includes(reportSpl[0])) {
            const index = id_list.indexOf(reportSpl[0]);
            if(answer[index] === 0) {
                answer[index] = [reportSpl[1]];
            } else {
                answer[index] = [...answer[index], reportSpl[1]];
            }
        } 
        if(avengers[reportSpl[1]] === undefined) {
            avengers[reportSpl[1]] = 1;
        } else {
            avengers[reportSpl[1]] += 1;
        }
    }

    const baned = Object.keys(avengers).filter((key) => avengers[key] >= k);
    for(let i = 0; i < answer.length; i++) {
        let count = 0;
        if(answer[i] !== 0) {
            for(let j = 0; j < answer[i].length; j++) {
                if(answer[i] !== 0 && baned.includes(answer[i][j])) {
                    count++;
                }
            } 
        }
        answer[i] = count;
    }
    
    return answer;
}