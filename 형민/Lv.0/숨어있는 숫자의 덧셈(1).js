//
//  프로그래머스_숨어있는 숫자의 덧셈(1).js
//  algorithm
//
//  Created by 김형민 on 2023/03/26.
//

function solution(my_string) {
    let answer = 0;
    let sum = my_string.split("");
    for(let i of sum){
        if(Number(i)){
            answer += Number(i);
        }
    }
    return answer;
}