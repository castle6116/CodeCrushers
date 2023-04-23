//
//  프로그래머스_택배상자.swift
//  algorithm
//
//  Created by 김진우 on 2023/04/22.
//
// 느낀 점: 요즘 안풀었더니 집중을 잘 못했다 쉬운 문제였다.
// https://school.programmers.co.kr/learn/courses/30/lessons/131704#

import Foundation

func 프로그래머스_택배상자(_ order:[Int]) -> Int {
    var arr = [Int]()
    var popBox = 0
    var position = order[0] + 1
    var result = 0
    
    for j in 0...order[0] {
        arr.append(j)
    }
    
    for box in order {
        if popBox == 0 {
            popBox = arr.popLast() ?? -1
        }
        
        if popBox == box {
            popBox = 0
            result += 1
        } else if position <= box {
            arr.append(popBox)
            for i in position..<box {
                arr.append(i)
            }
            position = box + 1
            popBox = 0
            result += 1
        } else {
            break
        }
    }
    
    return result
}
