//
//  프로그래머스_대충만든자판.swift
//  algorithm
//
//  Created by 김진우 on 2023/02/26.
//

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
