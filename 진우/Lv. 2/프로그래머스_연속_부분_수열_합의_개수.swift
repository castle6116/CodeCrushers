//
//  프로그래머스_연속_부분_수열_합의_개수.swift
//  algorithm
//
//  Created by 김진우 on 2023/03/10.
//
// https://school.programmers.co.kr/learn/courses/30/lessons/131701
// 느낀점 : 처음에 만들었을 때 for문을 3중첩으로 사용하고 거기에다가 reduce(n)까지 해서 시간 복잡도가 n3제곱이라 말도 안되게 오래걸렸는데
// 앞의 값을 저장해놓고 계속 더하는 형식으로 하니까 쉽게 풀렸다

import Foundation

func 프로그래머스_연속_부분_수열_합의_개수(_ elements:[Int]) -> Int {
    var result = Set<Int>()
    var repeatNumber = 0
    var inputItem = [[Int]](repeating: [Int](), count: elements.count)
    
    func insertItem(_ indexNum: Int) -> Int {
        var index = indexNum + repeatNumber
        if index > elements.count - 1 {
            index -= elements.count
        }
        inputItem[indexNum].append(elements[index])
        inputItem[indexNum] = [inputItem[indexNum].reduce(0) { $0 + $1 }]
        
        return inputItem[indexNum][0]
    }
    
    while repeatNumber < elements.count {
        for i in 0..<elements.count {
            result.insert(insertItem(i))
        }
        repeatNumber += 1
    }
    
    return result.count
}
