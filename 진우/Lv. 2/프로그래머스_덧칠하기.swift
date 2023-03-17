//
//  프로그래머스_덧칠하기.swift
//  algorithm
//
//  Created by 김진우 on 2023/03/17.
//
// https://school.programmers.co.kr/learn/courses/30/lessons/161989
// 느낀점 : 이게 왜 2레벨 문제지?

import Foundation

func 프로그래머스_덧칠하기(_ n:Int, _ m:Int, _ section:[Int]) -> Int {
    var result = 0, section = section
    var roller = 0
    
    for i in 0..<section.count {
        if roller < section[i] {
            roller = m + section[i] - 1
            result += 1
        }
    }
    return result
}
