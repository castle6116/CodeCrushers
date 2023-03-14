
/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/138476
 * @author HwaYeon
 * @param {*} k 
 * @param {*} tangerine 
 * @returns 
 */
function solution(k, tangerine) {
    let answer = 0;
    let sizeObj = {};
    for(let i = 0; i < tangerine.length; i++) {
        const size = tangerine[i];
        if(sizeObj[size] === undefined) {
            sizeObj[size] = 1;
        } else {
            sizeObj[size] += 1;
        }
    }
    const sizeArr = Object.entries(sizeObj).sort(([, a], [, b]) => b - a);
    let totalSize = 0;
    for(let i = 0; i < sizeArr.length; i++) {
        const size = sizeArr[i][1];
        totalSize += size;
        if(totalSize >= k) {
            answer = i + 1;
            break;
        }
    }
    return answer;
}


/**
 * @author hn8423 등
 * @param {*} k 
 * @param {*} tangerine 
 * @returns 
 */
function solution(k, tangerine) {
    let answer = 0;
    const tDict = {};
    tangerine.forEach((t) => tDict[t] = (tDict[t] || 0) + 1);
    const tArr = Object.values(tDict).sort((a, b) => b - a);
    for (const t of tArr) {
        answer++;
        if (k > t) k -= t;
        else break;
    }
    return answer;
}