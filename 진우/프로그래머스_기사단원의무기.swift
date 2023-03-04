//
//  프로그래머스_기사단원의무기.swift
//  algorithm
//
//  Created by 김진우 on 2023/02/26.
//
// https://school.programmers.co.kr/learn/courses/30/lessons/136798
// 느낀점: 문제는 안어려웠는데 제곱근 구하는게 어려웠다 한번 생각해보자

import Foundation

func 프로그래머스_기사단원의무기(_ number:Int, _ limit:Int, _ power:Int) -> Int {
    func sqrt_result(_ num: Int) -> [Int] {
        var sqrtList = Set<Int>()
        for i in 1...Int(sqrt(Double(num))) {
            if num % i == 0 {
                sqrtList.insert(i)
                if num / i != 1 {
                    sqrtList.insert(num / i)
                }
            }
        }
        
        return sqrtList.map{Int($0)}
    }
    var result = 0
    
    for i in 1...number {
        var knight = sqrt_result(i).count
        var damage = 0
        if knight > limit {
            damage = power
        } else {
            damage = knight
        }
        result += damage
    }
    
    return result
}
