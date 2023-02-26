//
//  프로그래머스_과일장수.swift
//  algorithm
//
//  Created by 김진우 on 2023/02/21.
//
// https://school.programmers.co.kr/learn/courses/30/lessons/135808
// 느낀점 : 크게 어렵진 않았던 문제다

import Foundation

func 프로그래머스_과일장수(_ k:Int, _ m:Int, _ score:[Int]) -> Int {
    var score_sort = score.sorted(by: <)
    var score_list = [Int]()
    var score = 0
    let item = 0
    while score_sort.count >= m {
        for i in 0..<m {
            score_list.append(score_sort.popLast()!)
        }
        
        score += score_list.min()! * m
        score_list = []
    }
    return score
}
