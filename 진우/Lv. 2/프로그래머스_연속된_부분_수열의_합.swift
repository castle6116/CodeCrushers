//
//  프로그래머스_연속된_부분_수열의_합.swift
//  algorithm
//
//  Created by 김진우 on 2023/04/30.
//
// 느낀 점: 투포인터를 사용한 문제를 처음 풀어봤다 재밌는데 시간을 줄일 수 있는 뭔가 나은 방향이 있지 않았을까??
// https://school.programmers.co.kr/learn/courses/30/lessons/178870?language=swift

import Foundation

func 프로그래머스_연속된_부분_수열의_합(_ sequence:[Int], _ k:Int) -> [Int] {
    var left = 0
    var right = 0
    var kSum = 0
    var result = [Int: [(Int, Int)]]()
    var min = Int.max
    
    while right <= sequence.count {
        
        if kSum > k {
            kSum -= sequence[left]
            left += 1
        } else if kSum < k && sequence.count > right {
            kSum += sequence[right]
            right += 1
        } else {
            right += 1
        }
        
        if kSum == k {
            let gap = abs(left - right - 1)
            if min >= gap {
                min = gap
                if result[gap] != nil {
                    result[gap]!.append((left, right - 1))
                } else {
                    result[gap] = [(left, right - 1)]
                }
                
                result.forEach {
                    if $0.key > min {
                        result[$0.key] = nil
                    }
                }
            }
            kSum -= sequence[left]
            left += 1
        }
    }
    
    return (result[min]?.first.map{ [$0.0, $0.1] })!
}
