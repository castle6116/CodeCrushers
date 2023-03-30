//
//  프로그래머스_짝수 홀수 개수.js
//  algorithm
//
//  Created by 김형민 on 2023/03/25.
//




function solution(num_list) {
var answer = [0,0];
    for(var i = 0; i <= num_list.length; i++){
    if(num_list[i] % 2 == 0){
        answer[0] += 1;
    }else if(num_list[i] % 2 == 1){
        answer[1] += 1;
    }
}
    return answer;
}
