//
//  프로그래머스_삼총사.swift
//  algorithm
//
//  Created by 김진우 on 2023/03/01.
//
// https://school.programmers.co.kr/learn/courses/30/lessons/131705
// 느낀점 : 완전탐색 문제였다 3중 for문을 쓰는거 보단 재귀형식이 좋았던거 같다 재귀 방법 생각해보자.

import Foundation

func 프로그래머스_삼총사(_ number:[Int]) -> Int {
    var item = [Int]()
    var result = 0
    
    for (indexI, valueI) in number.enumerated() {
        item.append(valueI)
        for (indexJ, valueJ) in number.enumerated() {
            if indexI >= indexJ {
                continue
            }
            item.append(valueJ)
            for (indexK, valueK) in number.enumerated() {
                var reduce = 0
                if indexJ >= indexK || indexI >= indexK {
                    continue
                }
                item.append(valueK)
                
                reduce = item.reduce(0, +)
                if reduce == 0 {
                    result += 1
                }
                item.popLast()
            }
            item.popLast()
        }
        item = []
    }
    return result
}
