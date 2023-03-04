//
//  프로그래머스_바탕화면_정리.swift
//  algorithm
//
//  Created by 김진우 on 2023/03/03.
//
// https://school.programmers.co.kr/learn/courses/30/lessons/161990
// 느낀점 : 2차원 배열 + 좌표 계산 하는 문제였다. 크게 어렵진 않았고 1레벨 전부 다 풀었다 만세!

import Foundation

func 프로그래머스_바탕화면_정리(_ wallpaper:[String]) -> [Int] {
    var wallpaper = wallpaper.map{String($0).map{String($0)}}
    var position = [(Int, Int)]()
    var result = [Int]()
    var Min = (50, 50)
    var Max = (0, 0)
    
    for (indexUp, valueUp) in wallpaper.enumerated() {
        for (index, value) in valueUp.enumerated() {
            if value == "#" {
                position.append((indexUp, index))
            }
        }
    }
    
    for i in position {
        if Min.0 > i.0 {
            Min = (i.0, Min.1)
        }
        
        if Min.1 > i.1 {
            Min = (Min.0, i.1)
        }
        
        if Max.0 < i.0 {
            Max = (i.0, Max.1)
        }
        
        if Max.1 < i.1 {
            Max = (Max.0, i.1)
        }
    }
    
    
    return [Min.0, Min.1, Max.0 + 1, Max.1 + 1]
}
