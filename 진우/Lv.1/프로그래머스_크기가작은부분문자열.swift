//
//  프로그래머스_크기가작은부분문자열.swift
//  algorithm
//
//  Created by 김진우 on 2023/02/28.
//
// https://school.programmers.co.kr/learn/courses/30/lessons/147355
// 느낀점 : 크게 어렵진 않았다 다른 사람들의 풀이를 참조 해보자

import Foundation

func 프로그래머스_크기가작은부분문자열(_ t: String, _ p: String) -> Int {
    let num = p.count
    var item = [String]()
    var itemCount = 0
    var result = 0
    var p = p.map{String($0)}
    var t = t.map{String($0)}
    var tCount = t.count
    
    for number in 0...t.count - num {
        for index in 0..<tCount where index >= number {
            if itemCount < num {
                item.append(t[index])
                itemCount += 1
            }
            
            if itemCount == num {
                if !StringMinus(p, item, num) {
                    result += 1
                }
                item = []
                itemCount = 0
                break
            }
        }
    }
    
    return result
}

// true 반환 시 list가 큼, false 반환 시 p가 큼
func StringMinus(_ s1: [String], _ s2: [String], _ num: Int) -> Bool {
    // s1 == p, s2 == list
    let p = s1
    let list = s2
    
    for i in 0..<num {
        let result = Int(p[i])! - Int(list[i])!
        if result < 0 {
            return true
        } else if result > 0 {
            return false
        }
    }
    
    return false
}
