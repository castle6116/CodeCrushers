//
//  프로그래머스_프렌즈4블록.swift
//  algorithm
//
//  Created by 김진우 on 2023/03/16.
//
// https://school.programmers.co.kr/learn/courses/30/lessons/17679
// 느낀점: 와 2차원 배열 for문 돌리는게 왜 이렇게 햇갈렸을까 로직 구상하는 시간보다 for문에서 헤맨 시간이 더 오래 걸렸다 ㅋㅋㅋㅋ

import Foundation

func 프로그래머스_프렌즈4블록(_ m:Int, _ n:Int, _ board:[String]) -> Int {
    var boardArray = board.map { String($0).map { String($0) } }
    var boardCheck = [[Bool]](repeating: [Bool](repeating: false, count: boardArray[0].count), count: boardArray.count)
    let xIndex = boardArray[0].count - 1
    let yIndex = boardArray.count - 1
    var delete = true
    var result = 0
    
    while delete {
        delete = false
        for x in 0..<xIndex {
            for y in 0..<yIndex {
                if boardArray[y][x] == "" { continue }
                let one = boardArray[y][x], two = boardArray[y][x + 1]
                let three = boardArray[y + 1][x], four = boardArray[y + 1][x + 1]
                if one == two && two == three && three == four {
                    boardCheck[y][x] = true
                    boardCheck[y + 1][x] = true
                    boardCheck[y][x + 1] = true
                    boardCheck[y + 1][x + 1] = true
                    delete = true
                }
            }
        }
        
        for y in 0...yIndex {
            for x in 0...xIndex where boardCheck[y][x] == true {
                boardCheck[y][x] = false
                for upY in (0...y).reversed() {
                    if upY == 0 {
                        boardArray[upY][x] = ""
                        continue
                    }
                    boardArray[upY][x] = boardArray[upY - 1][x]
                }
                result += 1
            }
        }
    }
    return result
}
