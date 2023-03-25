/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/12949
 * @author HwaYeon
 * @param {*} arr1 
 * @param {*} arr2 
 * @returns 
 */
function solution(arr1, arr2) {
    const row = arr1.length;
    const col = arr2[0].length;
    let answer = Array.from(new Array(row), () => new Array(col));

    for(let i = 0; i < row; i++) {
        for(let j = 0; j < col; j++) {
            answer[i][j] = 0;
            for(let k = 0; k < arr2.length; k++) {
                answer[i][j] += arr1[i][k] * arr2[k][j];
            }
        }
    }
    return answer;
}


/**
 * @author 엄서영 등
 * @param {*} arr1 
 * @param {*} arr2 
 * @returns 
 */
function solution2(arr1, arr2) {
    return arr1.map((row) => arr2[0].map((x,y) => row.reduce((a,b,c) => a + b * arr2[c][y], 0)))
}