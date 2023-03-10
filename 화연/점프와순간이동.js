/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/12980
 * @author HwaYeon
 * @param {*} n 
 * @returns 
 */
function solution(n) {
    let ans = 0;
    while(n >= 1) {
        if(n%2 === 0) {
            n = n/2;
        } else {
            ans++;
            n = (n-1)/2;
        }
    }
    return ans;
}



/**
 * @author 토르코
 * @param {*} n 
 * @returns 
 */
function solution2(n){
    if(n === 1) return 1;
    const nArr = Array.from(n.toString(2));
    return nArr.reduce((a,b)=>(+a)+(+b));
}
// 어떤한 수를 2로 나눈 나머지의 합을 구한다는 점에서 n을 2진수로 나타내어 모두 더하는 방법으로 풀 수도 있음.
