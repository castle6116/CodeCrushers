//
//  프로그래머스_행렬_테두리_회전하기.swift
//  algorithm
//
//  Created by 김진우 on 2023/07/15.
//

import Foundation

func 프로그래머스_행렬_테두리_회전하기(_ rows:Int, _ columns:Int, _ queries:[[Int]]) -> [Int] {
    var list = [[Int]](repeating: [Int](repeating: 0, count: columns), count: rows)
    let xLocation = [0, 1, 0, -1]
    let yLocation = [1, 0, -1, 0]
    var count = 1
    var result = [Int]()
    
    func added(_ xPosition: inout Int, _ yPosition: inout Int, _ i: Int, _ before: inout Int?, _ minValue: inout Int) -> Int {
        xPosition += xLocation[i]
        yPosition += yLocation[i]
        if let after = before {
            let item = list[xPosition][yPosition]
            list[xPosition][yPosition] = after
            before = item
        } else {
            before = list[xPosition][yPosition]
            list[xPosition][yPosition] = 0
        }
        
        if minValue > before! {
            minValue = before!
        }
        
        return before!
    }
    
    for i in 0..<rows {
        for j in 0..<columns {
            list[i][j] = count
            count += 1
        }
    }
    
    for query in queries {
        let x1 = query[0] - 1, y1 = query[1] - 1
        let x2 = query[2] - 1, y2 = query[3] - 1
        var xPosition = x1, yPosition = y1
        var before: Int?
        var minValue = Int.max
        
        for i in 0..<4 {
            if i % 2 == 0 {
                for _ in 1...y2 - y1 {
                    before = added(&xPosition, &yPosition, i, &before, &minValue)
                }
            } else {
                for _ in 1...x2 - x1 {
                    before = added(&xPosition, &yPosition, i, &before, &minValue)
                }
            }
        }
        
        list[xPosition][yPosition + 1] = before!
        
        result.append(minValue)
    }
    
    return result
}
