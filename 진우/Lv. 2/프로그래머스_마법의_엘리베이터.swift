//
//  프로그래머스_마법의_엘리베이터.swift
//  algorithm
//
//  Created by 김진우 on 2023/03/24.
//
// https://school.programmers.co.kr/learn/courses/30/lessons/148653
// 느낀점: 탐욕법을 사용한 문제인 듯 하다 크게 어렵진 않았다

import Foundation

func 프로그래머스_마법의_엘리베이터(_ storey:Int) -> Int {
    var storey = String(storey).map{String($0)}
    var stack = [Int]()
    storey.insert("0", at: 0)
    storey = storey.reversed()
    
    for index in 0..<storey.count {
        var st = Int(storey[index])!
        if st > 5 {
            storey[index + 1] = String(Int(storey[index + 1])! + 1)
            stack.append(10 - st)
        } else if st == 5 {
            var st2 = Int(storey[index + 1])! + 1
            if st2 > 5 {
                storey[index + 1] = String(Int(storey[index + 1])! + 1)
                stack.append(10 - st)
            } else {
                stack.append(st)
            }
        } else {
            stack.append(st)
        }
    }
    return stack.reduce(0) { $0 + $1 }
}
