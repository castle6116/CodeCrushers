//
//  프로그래머스_제곱수 판별하기.js
//  algorithm
//
//  Created by 김형민 on 2023/03/26.
//

function solution(n) {
    return  Math.sqrt(n) % 1 === 0 ? 1 : 2;
}