//
//  프로그래머스_문자열 안에 문자열.js
//  algorithm
//
//  Created by 김형민 on 2023/03/26.
//

function solution(str1, str2) {
    let answer = 0;
    if(str1.includes(str2)){
        return 1;
    }
    return 2;
}