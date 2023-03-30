//
//  프로그래머스_최댓값 만들기(1).js
//  algorithm
//
//  Created by 김형민 on 2023/03/25.
//


function solution(numbers) {
    var answer = 0;
    let sum = 0;
    numbers.sort((a,b) =>(b - a));
    sum = numbers[0] * numbers[1];
    return sum;
}
