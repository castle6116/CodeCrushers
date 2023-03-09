/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/42885
 * @author HwaYeon
 * @param {*} people 
 * @param {*} limit 
 * @returns 
 */
function solution(people, limit) {
    people.sort((a, b) => b - a);
    let answer = 0;
    for(let i = 0; i < people.length; i++) {
        if(limit - people[i] >= 40) {
            if(people[i] + people[people.length - 1] <= limit) {
                people.pop();
            }
        }
        answer++;
    }
    return answer;
}


/**
 * 
 * @author Sean.Kim 등
 * @param {*} people 
 * @param {*} limit 
 * @returns 
 */
function solution2(people, limit) {
    people.sort(function(a, b){return a-b});
    for(var i=0, j=people.length-1; i < j; j--) {
        if( people[i] + people[j] <= limit ) i++;
    }    
    return people.length-i;
}