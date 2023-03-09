/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/42889
 * @author HwaYeon
 * @param {*} N 
 * @param {*} stages 
 * @returns 
 */
function solution(N, stages) {
    let noClears = {}
    for(let i = 0; i < stages.length; i++) {
        if(noClears[stages[i]] === undefined) {
            noClears[stages[i]] = 1;
        } else {
            noClears[stages[i]] += 1;
        }       
    }
    console.log(noClears);
    let stageClears = {}
    for(let i = 1; i <= N; i++) {
        stageClears[i] = 0;
        if(noClears[i] === undefined) {
            noClears[i] = 0;
        }
        for(let j = i; j <= N + 1; j++) {
            if(noClears[j] !== undefined) {
                stageClears[i] += noClears[j];
            }
        }
        stageClears[i] = noClears[i]/stageClears[i];
    }
    console.log(stageClears);

    return Object.entries(stageClears).sort(([, a], [, b]) => b - a)
        .map((a) => a = Number(a[0]));
}




/**
 * @author 김아현 등
 * @param {*} N 
 * @param {*} stages 
 * @returns 
 */
function solution2(N, stages) {
    let result = [];
    for(let i=1; i<=N; i++){
        let reach = stages.filter((x) => x >= i).length;
        let curr = stages.filter((x) => x === i).length;
        result.push([i, curr/reach]);
    }
    result.sort((a,b) => b[1] - a[1]);
    return result.map((x) => x[0]);
}
