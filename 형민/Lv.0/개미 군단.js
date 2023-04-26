//
//  프로그래머스_개미 군단.js
//  algorithm
//
//  Created by 김형민 on 2023/03/26.
//

function solution(hp) {
    return Math.floor(hp / 5)+Math.floor((hp % 5) / 3) +(hp % 5 / 3);
}