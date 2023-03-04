/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/159994
 * @author HwaYeon
 * @param {*} cards1 
 * @param {*} cards2 
 * @param {*} goal 
 * @returns 
 */
function solution(cards1, cards2, goal) {
    let answer = "Yes";
    for(let i = 0; i < goal.length; i++) {
        if(cards1[0] === goal[i]) {
            cards1.splice(0, 1);
        } else if (cards2[0] === goal[i]) {
            cards2.splice(0, 1);
        } else {
           answer = "No"; 
            break;
        }
    }
    return answer;
}