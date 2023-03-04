//
//  프로그래머스_예상_대진표.swift
//  algorithm
//
//  Created by 김진우 on 2023/03/04.
//
// https://school.programmers.co.kr/learn/courses/30/lessons/12985
// 느낀점 : 수학 문제인거 알았으면서 구현한다고 까불락 거리다가 시간만 날렸다 문제 유형에 맞게 풀자

import Foundation

func 프로그래머스_예상_대진표(_ n:Int, _ a:Int, _ b:Int) -> Int {
    var A = a
    var B = b
    var round = 0
    
    while true {
        if A % 2 == 0 {
            A /= 2
        } else {
            A = (A + 1) / 2
        }
        
        if B % 2 == 0 {
            B /= 2
        } else {
            B = (B + 1) / 2
        }
        
        round += 1
        
        if (A == B) {
            break
        }
    }
    
    return round
}
