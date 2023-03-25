//
//  프로그래머스_롤케이크_자르기.swift
//  algorithm
//
//  Created by 김진우 on 2023/03/25.
//
// https://school.programmers.co.kr/learn/courses/30/lessons/132265
// 느낀점 : 딕셔너리로 푸니깐 쉽게 잘 풀렸다 근데 속도는 좀 느려서 다른 풀이를 보니 속도가 3배가까이 빨랐다. 효율적으로 풀어보자


import Foundation
// 내 풀이
func 프로그래머스_롤케이크_자르기(_ topping:[Int]) -> Int {
    var brother = [Int: Int]()
    var bigBrother = [Int: Int]()
    var bigBrotherValue = 0
    
    for i in topping {
        if brother[i] != nil {
            brother[i]! += 1
        } else {
            brother[i] = 1
        }
    }
    
    for i in topping {
        if brother[i] != nil {
            brother[i]! -= 1
            if bigBrother[i] != nil {
                bigBrother[i]! += 1
            } else {
                bigBrother[i] = 1
            }
            if brother[i] == 0 {
                brother[i] = nil
            }
        }
        
        if brother.count == bigBrother.count {
            bigBrotherValue += 1
        }
    }
    return bigBrotherValue
}

// 참조 풀이
func 프로그래머스_롤케이크_자르기_참조(_ topping:[Int]) -> Int {
    // 두 조각으로 롤 케이크를 나눈다!
    // mid index 를 두고, start - mid, mid + 1 - end 까지의 토핑 종류를 계산해놓으면 된다.
    var startArr: [Int] = Array(repeating: 0, count: topping.count)
    var endArr: [Int] = Array(repeating: 0, count: topping.count)

    initArr(arr: &startArr, range: stride(from: 0, through: topping.count - 2, by: +1), topping: topping)
    initArr(arr: &endArr, range: stride(from: topping.count - 1, through: 1, by: -1), topping: topping)
    // 토핑이 달려있는 개수를 계산해서 n까지 자르면 있을 수 있는 토핑의 개수를 모조리 계산한다 (index별로) 값만 같으면 끝내면 된다.
    // 라는 풀이 방식이 있었구나 생각을 좀 더 잘 해봤다면 시간을 줄일 수 있었을 탠데 아쉽다
    var ret = 0
    for i in 1...topping.count - 2 {
        if startArr[i] == endArr[i+1] {
            ret += 1
        }
    }
    return ret
}

func initArr(arr: inout [Int], range: StrideThrough<Int>, topping: [Int]) {
    var set: Set<Int> = Set()
    for i in range {
        print(i)
        set.insert(topping[i])
        arr[i] = set.count
    }
    print(arr)
    print("end")
}
