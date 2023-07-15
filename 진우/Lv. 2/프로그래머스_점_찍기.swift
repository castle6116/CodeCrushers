//
//  프로그래머스_점_찍기.swift
//  algorithm
//
//  Created by 김진우 on 2023/07/15.
//

import Foundation

func 프로그래머스_점_찍기(_ k:Int, _ d:Int) -> Int64 {
    var result: Int = 0
    for x in stride(from: 0, through: d, by: k) {
        var d: Double = Double(d)
        var x = Double(x)
        var y = Int(sqrt(pow(d, 2) - pow(x, 2)))
        result += (y / k) + 1
    }
    
    return Int64(result)
}
