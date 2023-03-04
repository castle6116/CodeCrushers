//
//  프로그래머스_콜라문제.swift
//  algorithm
//
//  Created by 김진우 on 2023/03/01.
//
// https://school.programmers.co.kr/learn/courses/30/lessons/132267
// 느낀점 : 옛날에 바퀴벌레 문제가 떠오르는 추억의 문제다 재밌고 쉽게 풀었다.


import Foundation

func 프로그래머스_콜라문제(_ a:Int, _ b:Int, _ n:Int) -> Int {
    var emptyBottle = n
    var getBottle = 0
    var resultBottle = 0
    while emptyBottle >= a {
        while emptyBottle >= a {
            getBottle += b
            emptyBottle -= a
        }
        resultBottle += getBottle
        emptyBottle += getBottle
        getBottle = 0
    }
    
    return resultBottle
}
