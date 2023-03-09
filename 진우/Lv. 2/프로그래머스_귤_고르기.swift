//
//  프로그래머스_귤_고르기.swift
//  algorithm
//
//  Created by 김진우 on 2023/03/09.
//
// https://school.programmers.co.kr/learn/courses/30/lessons/138476
// 느낀점 : 크게 어렵지 않았던 문제다.

import Foundation

func 프로그래머스_귤고르기(_ k:Int, _ tangerine:[Int]) -> Int {
    var dictionary = [Int: Int]()
    var k = k
    var result = 0
    var values = [Int]()
    
    for i in tangerine {
        if let _ = dictionary[i] {
            dictionary[i]! += 1
        } else {
            dictionary[i] = 1
        }
    }
    
    values = dictionary.values.sorted(by: <)

    while k > 0 {
        k -= values.popLast() ?? 0
        result += 1
    }
    
    return result
}
