//
//  프로그래머스_숫자_변환하기.swift
//  algorithm
//
//  Created by 김진우 on 2023/03/25.
//
// https://school.programmers.co.kr/learn/courses/30/lessons/154538
// 느낀점 : 상향식으로 하니 시간이 너무 부족해서 힌트를 조금 봤더니 하향식 형식으로 하면 시간을 줄일 수 있다고 했다.
// 좋은 방안이다

import Foundation

// 하향식
func 프로그래머스_숫자_변환하기(_ x:Int, _ y:Int, _ n:Int) -> Int {
    var queue = [y]
    var count = 0
    var breakPoint = false
    if x == y { return 0 }
    while queue.count > 0 {
        var item = [Int]()
        for i in queue {
            var nPlus = i - n, nTwo = i / 2, nThree = i / 3
            if nPlus > x {
                item.append(nPlus)
            }
            
            if i % 2 == 0 {
                item.append(nTwo)
            } else {
                nTwo = 0
            }
            
            if i % 3 == 0 {
                item.append(nThree)
            } else {
                nThree = 0
            }
            
            if nPlus == x || nTwo == x || nThree == x {
                breakPoint = true
                break
            }
            
        }
        count += 1
        queue = item
        if breakPoint {
            break
        }
    }
    
    if !breakPoint {
        return -1
    }
    
    return count
}

/*
// 상향식
func 프로그래머스_숫자_변환하기(_ x:Int, _ y:Int, _ n:Int) -> Int {
    var stack = [x]
    var count = 0
    var endPoint = false
    while stack.count > 0 {
        var item = [Int]()
        for i in stack {
            if i > y {
                continue
            } else if i == y {
                endPoint = true
                break
            }
            
            item.append(i + n)
            item.append(i * 2)
            item.append(i * 3)
        }
        if endPoint {
            break
        }
        stack = item
        count += 1
    }
    
    if !endPoint {
        return -1
    }
    
    return count
}
*/
