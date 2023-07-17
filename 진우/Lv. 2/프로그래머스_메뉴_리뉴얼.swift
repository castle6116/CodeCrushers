//
//  프로그래머스_메뉴_리뉴얼.swift
//  algorithm
//
//  Created by 김진우 on 2023/05/07.
//

import Foundation

var dict = [String: Int]()

// nCk 를 모두 구해서 dict에 저장
func combination(_ str: [Character], _ target: Int) {
    let len = str.count
    
    func combi(_ index: Int, _ depth: Int, _ temp: String) {
        if target == depth {
            if dict[temp] == nil { dict[temp] = 0}
            dict[temp]! += 1
        }
        
        for i in index..<len {
            combi(i + 1, depth + 1, temp + String(str[i]))
        }
    }
    
    combi(0, 0, "")
}

func 프로그래머스_메뉴_리뉴얼(_ orders:[String], _ course:[Int]) -> [String] {
    var result = [String]()
    
    for k in course {
        for order in orders where order.count >= k {
            combination(Array(order).sorted(by: <), k)
        }
    }
    
    for k in course {
        let sortedDict = dict.filter { $0.key.count == k && $0.value >= 2 }.sorted { $0.value > $1.value }
        
        if sortedDict.isEmpty { continue }
        
        let maxValue = sortedDict.first!.value
        result.append(contentsOf: sortedDict.filter { $0.value == maxValue }.map { $0.key})
    }
    
    return result.sorted(by: <)
}
