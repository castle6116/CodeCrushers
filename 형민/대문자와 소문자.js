//
//  프로그래머스_대문자와 소문자.js
//  algorithm
//
//  Created by 김형민 on 2023/03/27.
//

// ES6 기능 좀 더 숙지

function solution(my_string) {
    var answer = '';
    for(let i of my_string){
        if(i === i.toLowerCase()){
        answer += i.toUpperCase();
    }else
        answer += i.toLowerCase();
    }
    return answer;
}