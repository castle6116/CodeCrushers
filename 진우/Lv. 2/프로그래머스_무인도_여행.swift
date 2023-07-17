//
//  프로그래머스_무인도_여행.swift
//  algorithm
//
//  Created by 김진우 on 2023/06/24.
//

import Foundation

func 프로그래머스_무인도_여행(_ maps:[String]) -> [Int] {
    var maps = maps.map{String($0).map{String($0)}}
    var result = [Int]()
    // 위 오른 아래 왼쪽
    let maxX = maps[0].count - 1
    let maxY = maps.count - 1
    let dx = [0, 1, 0, -1]
    let dy = [-1, 0, 1, 0]
    
    func wallCheck(_ x: Int, _ y: Int) -> Bool {
        if x > maxX || x < 0 || y > maxY || y < 0 {
            return true
        } else {
            return false
        }
    }
    
    func valueCheck(_ x: Int, _ y: Int) -> Bool {
        if maps[y][x] != "X" {
            return true
        } else {
            return false
        }
    }
    
    func move(_ x: Int, _ y: Int) -> Int {
        var itemSum = 0
        if valueCheck(x, y) {
            itemSum += Int(maps[y][x])!
            maps[y][x] = "X"
        } else {
            return 0
        }
        
        for i in 0..<4 where !wallCheck(x + dx[i], y + dy[i]) {
            if valueCheck(x + dx[i], y + dy[i]) {
                itemSum += move(x + dx[i], y + dy[i])
            }
        }
        
        return itemSum
    }
    
    for x in 0...maxX {
        for y in 0...maxY where valueCheck(x, y){
            result.append(move(x, y))
        }
    }
    
    if result.isEmpty {
        return [-1]
    }
    
    return result.sorted()
}
