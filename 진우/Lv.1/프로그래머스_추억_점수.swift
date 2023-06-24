//
//  프로그래머스_추억_점수.swift
//  algorithm
//
//  Created by 김진우 on 2023/05/06.
//
// 느낀 점 : 딕셔너리 활용 문제였다. 1레벨 문제는 이제 안풀어도 되려나?
// https://school.programmers.co.kr/learn/courses/30/lessons/176963

import Foundation

func 프로그래머스_추억_점수(_ name:[String], _ yearning:[Int], _ photo:[[String]]) -> [Int] {
    var result = [Int]()
    var score = [String: Int]()
    for i in 0..<name.count {
        score[name[i]] = yearning[i]
    }
    
    for list in photo {
        var photoScore = 0
        for name in list {
            if score[name] != nil {
                photoScore += score[name]!
            }
        }
        result.append(photoScore)
    }
    
    return result
}
