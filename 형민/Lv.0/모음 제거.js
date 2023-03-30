//
//  프로그래머스_모음 제거.js
//  algorithm
//
//  Created by 김형민 on 2023/03/26.
//

function solution(my_string) {
    var answer = '';
      const vowels = /[aeiou]+/g;
    return my_string.replace(vowels, '');
}