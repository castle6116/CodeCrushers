//
//  프로그래머스_시소_짝꿍.swift
//  algorithm
//
//  Created by 김진우 on 2023/03/29.
//
// 느낀점: 아직 덜 풀었다.
// https://school.programmers.co.kr/learn/courses/30/lessons/152996

import Foundation

func 프로그래머스_시소_짝꿍(_ weights:[Int]) -> Int64 {
    var weight = [Int: Int]()
    var space = [Int: [Int]]()
    var result: Int64 = 0
    
    for i in weights {
        if weight[i] == nil {
            weight[i] = 1
        } else {
            weight[i]! += 1
        }
        
        if space[i * 2] == nil {
            space[i * 2] = [i]
        } else {
            space[i * 2]!.append(i)
        }
        
        if space[i * 3] == nil {
            space[i * 3] = [i]
        } else {
            space[i * 3]!.append(i)
        }
        
        if space[i * 4] == nil {
            space[i * 4] = [i]
        } else {
            space[i * 4]!.append(i)
        }
    }
    
    for (key, value) in weight.sorted(by: <) {
        var item = 0
        var count = 0
        item += (value * (value - 1)) / 2
        if space[key * 2] != nil {
            space[key * 2] = space[key * 2]!.filter { $0 != key }
            count = space[key * 2]!.count + 1
            space[key * 2] = nil
            item += (count * (count - 1)) / 2
        }
        
        if space[key * 3] != nil {
            space[key * 3] = space[key * 3]!.filter { $0 != key }
            count = space[key * 3]!.count + 1
            space[key * 3] = nil
            item += (count * (count - 1)) / 2
        }
        
        if space[key * 4] != nil {
            space[key * 4] = space[key * 4]!.filter { $0 != key }
            count = space[key * 4]!.count + 1
            space[key * 4] = nil
            item += (count * (count - 1)) / 2
        }
        result += Int64(item)
    }
    
    return result
}
