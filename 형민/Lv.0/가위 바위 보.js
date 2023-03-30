//
//  프로그래머스_가위 바위 보.js
//  algorithm
//
//  Created by 김형민 on 2023/03/30
//

느낀점: MDN 보고 문법 공부 더 하자..^^

function solution(rsp) {
    var answer = '';
    for(let i = 0; i < rsp.length; i++){
        let cut = rsp.charAt(i);
        cut === "2" ? answer +="0" : cut === "0" ? answer +="5" : cut === "5" ? answer +="2" : '';
    }
    return answer;
}