//
//  프로그래머스_명예의전당_1.swift
//  algorithm
//
//  Created by 김진우 on 2023/03/01.
//
// https://school.programmers.co.kr/learn/courses/30/lessons/138477
// 느낀점 : 구조체 하나 만들어서 했는데 그냥 로직 안에다가 넣었어도 될 것 같긴하다.

import Foundation

func 프로그래머스_명예의전당_1(_ k:Int, _ score:[Int]) -> [Int] {
    var result = scoreList(limit: k)
    
    for i in score {
        result.appendIn(i)
    }
    
    return result.result
}

struct scoreList {
    var list = [Int]()
    var minNum = 2001
    var limit: Int
    var result = [Int]()
    
    init(limit: Int) {
        self.limit = limit
    }
    
    mutating func appendIn(_ num: Int) {
        if list.count < limit {
            list.append(num)
            if minNum > num {
                minNum = num
            }
        } else {
            if num > minNum {
                list.append(num)
                list.sort(by: >)
                _ = list.popLast()
                minNum = list.last!
            }
        }
        result.append(minNum)
    }
}
