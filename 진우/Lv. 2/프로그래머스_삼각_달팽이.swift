//
//  프로그래머스_삼각_달팽이.swift
//  algorithm
//
//  Created by 김진우 on 2023/03/25.
//
// https://school.programmers.co.kr/learn/courses/30/lessons/68645
// 느낀점: for문을 활용하는 문제였는데 잘 모르겠어서 결국 검색해서 정답을 알았다. 좀 더 고민해보면 좋았을 듯.. ㅠㅠ 비슷한 문제 더 풀어봐야겠다

import Foundation

func 프로그래머스_삼각_달팽이(_ n:Int) -> [Int] {
    var matrix: [[Int]] = [[Int]](repeating: Array(repeating: 0,count: n), count: n)
    
    let sum = n * (n+1) / 2 // 등차수열의 합
    var row = -1
    var col = 0
    var i = n
    var j = 0
    var currentNumber = 0
    
    while i > 0 {
        
        j = 0
        while (j < i) {
            row += 1
            currentNumber += 1
            matrix[row][col] = currentNumber
            j += 1
        }
        
        j = 0
        while (j < i-1) {
            col += 1
            currentNumber += 1
            matrix[row][col] = currentNumber
            j += 1
        }
        
        j = 0
        while (j < i-2) {
            col -= 1
            row -= 1
            currentNumber += 1
            matrix[row][col] = currentNumber
            j += 1
        }
        
        i -= 3
    }
    return matrix.flatMap { $0.filter{ $0 != 0 } }
}
