//
//  프로그래머스_점의 위치 구하기.js
//  algorithm
//
//  Created by 김형민 on 2023/03/25.
//

function solution(dot) {
    var answer = 0;
    if(dot[0] > 0 && dot[1] > 0){
        answer = 1;
    }else if(dot[0] < 0 && dot[1] > 0){
        answer = 2;
    }else if(dot[0] < 0 && dot[1] < 0){
        answer = 3;
    }else if(dot[0] > 0 && dot[1] < 0){
        answer = 4;
    }
    return answer;
}