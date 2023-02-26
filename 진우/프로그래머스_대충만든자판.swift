//
//  프로그래머스_대충만든자판.swift
//  algorithm
//
//  Created by 김진우 on 2023/02/25.
//
// https://school.programmers.co.kr/learn/courses/30/lessons/160586
// 느낀점: 크게 어렵진 않았는데 3중 For문이라 시간이 오래걸렸다. 딕셔너리 사용해서 적용 시켰다면 한번씩만 탐색하면 되서 더 나았을 듯 하다

import Foundation

func 프로그래머스_대충만든자판(_ keymap:[String], _ targets:[String]) -> [Int] {
    var result = [Int]()
    for target in targets {
        var index = 0
        for St in target.map{String($0)} {
            var minItem = 100
            for i in keymap {
                var i = i.map{String($0)}
                guard let item = i.firstIndex(of: St)
                else {
                    continue
                }
                
                if minItem > item {
                    minItem = item + 1
                }
            }
            
            if minItem == 100 {
                index = -1
                break
            }
            
            index += minItem
        }
        result.append(index)
    }
    return result
}
