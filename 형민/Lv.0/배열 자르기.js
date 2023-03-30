//
//  프로그래머스_배열 자르기.js
//  algorithm
//
//  Created by 김형민 on 2023/03/25.
//

function solution(numbers, num1, num2) {
    var answer = numbers.slice(num1,num2 +1);
    
    return answer;
}
