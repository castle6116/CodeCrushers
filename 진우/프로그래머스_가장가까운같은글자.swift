//
//  프로그래머스_가장가까운같은글자.swift
//  algorithm
//
//  Created by 김진우 on 2023/03/01.
//
// https://school.programmers.co.kr/learn/courses/30/lessons/142086
// 느낀점 : 딕셔너리로 푸니까 금방 했다. 어렵지는 않았다

import Foundation

func 프로그래머스_가장가까운같은글자(_ s:String) -> [Int] {
    var sDictionary = [String: Int]()
    var result = [Int]()
    
    for (index, value) in s.map{String($0)}.enumerated() {
        if sDictionary[value] == nil {
            sDictionary[value] = index
            result.append(-1)
        } else {
            var gap = (index - sDictionary[value]!)
            sDictionary[value] = index
            result.append(gap)
        }
    }
    
    return result
}
