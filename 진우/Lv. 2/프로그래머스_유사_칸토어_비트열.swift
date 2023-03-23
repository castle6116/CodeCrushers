//
//  프로그래머스_유사_칸토어_비트열.swift
//  algorithm
//
//  Created by 김진우 on 2023/03/23.
//
// https://school.programmers.co.kr/learn/courses/30/lessons/148652#
// 느낀점 : 분항 정복 알고리즘을 처음으로 풀어보는 문제였다. 푸는 아이디어는 떠올렸는데 구현하는데 너무 애를 먹었다. 좀 더 풀어봐야겠다

import Foundation

func 프로그래머스_유사_칸토어_비트열(_ n:Int, _ l:Int64, _ r:Int64) -> Int {
    var result = 0
    
    for i in l...r where i % 5 != 3 {
        var j = i - 1
        var breakPoint = false
        var count = 1
        
        while count < n {
            j /= 5
            if j % 5 == 2 || j == 2 {
                breakPoint = true
                break
            } else if j == 0 {
                break
            }
            count += 1
        }
        
        if j % 5 == 2 {
            breakPoint = true
            continue
        }
        
        if breakPoint {
            continue
        } else {
            result += 1
        }
    }
    
    return result
}
