//
//  프로그래머스_k진수에서_소수_개수_구하기.swift
//  algorithm
//
//  Created by 김진우 on 2023/03/13.
//
// https://school.programmers.co.kr/learn/courses/30/lessons/92335
// 느낀점: 소수 판별 알고리즘은 체만이 있는게 아니다.
// n을 진수 변환하면 100만 이상으로 나올 수도 있다 라는걸 생각 해보자

import Foundation

func 프로그래머스_k진수에서_소수_개수_구하기(_ n:Int, _ k:Int) -> Int {
    var nRadix = String(n, radix: k).components(separatedBy: "0").filter { $0 != "1" }
    var result = 0
    
    func isPrime(_ num: Int) -> Bool {
        if (num < 4) {
            return num == 1 ? false : true
        }
        for i in 2...Int(sqrt(Double(num))) {
            if (num % i == 0) { return false }
        }
        return true
    }
    
    for i in nRadix.compactMap { Int($0) } {
        if isPrime(i) {
            result += 1
        }
    }
    
    return result
}
