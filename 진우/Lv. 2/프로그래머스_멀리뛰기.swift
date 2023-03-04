//
//  프로그래머스_멀리뛰기.swift
//  algorithm
//
//  Created by 김진우 on 2023/03/04.
//
// https://school.programmers.co.kr/learn/courses/30/lessons/12914
// 느낀점: DP문제이고 바텀 업 하니까 쉽게 풀었다

import Foundation

func 프로그래머스_멀리뛰기(_ n:Int) -> Int {
    var result = [1, 2, 3]
    
    while result.count < n {
        result.append((result[result.count - 2] + result[result.count - 1]) % 1234567)
    }
    
    return result[n - 1]
}
