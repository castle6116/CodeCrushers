//
//  프로그래머스_소수찾기.swift
//  algorithm
//
//  Created by 김진우 on 2023/02/18.
//
// https://school.programmers.co.kr/learn/courses/30/lessons/12921
// 풀다 느낀점 : 에라토네스의 체 사용 방법을 다시 배웠다

import Foundation

func 프로그래머스_소수찾기(_ n:Int) -> Int {
    var item = [Int](repeating: 0, count: n + 1)
    var j = [Int](repeating: 0, count: n + 1)

    for i in 0..<item.count {
        item[i] = i
        j[i] = i
    }

    for i in 2...n {
        if item[i] == 0 { continue }
        for j in stride(from: i * 2, through: n, by: i) {
            item[j] = 0
        }
    }
    
    return item.filter{$0 != 0}.count - 1
}
