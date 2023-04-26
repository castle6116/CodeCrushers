//
//  프로그래머스_뒤에_있는_큰_수_찾기.swift
//  algorithm
//
//  Created by 김진우 on 2023/03/23.
//
// https://school.programmers.co.kr/learn/courses/30/lessons/154539
// 느낀점: 스택 활용 문제인데 와 생각이 정말 안났다 스택 관련 문제 더 풀어봐야겠다.
import Foundation

func 프로그래머스_뒤에_있는_큰_수_찾기(_ numbers:[Int]) -> [Int] {
    var result = [-1]
    var stack = [numbers.last!]
    for i in (0..<numbers.count - 1).reversed() {
        var success = false
        var item = 0
        while stack.count > 0 {
            item = stack.popLast() ?? 0
            if item > numbers[i] {
                result.append(item)
                stack.append(item)
                stack.append(numbers[i])
                success = true
                break
            }
        }

        if success == false {
            result.append(-1)
            stack.append(numbers[i])
        }

    }
    return result.reversed()
}

//func 프로그래머스_뒤에_있는_큰_수_찾기(_ numbers:[Int]) -> [Int] {
//    var result = [Int]()
//
//    for i in 0..<numbers.count {
//        var index = i + 1
//        var success = false
//        while index < numbers.count {
//            if numbers[i] < numbers[index] {
//                result.append(numbers[index])
//                success = true
//                break
//            }
//            index += 1
//        }
//
//        if !success {
//            result.append(-1)
//        }
//    }
//    return result
//}
//
