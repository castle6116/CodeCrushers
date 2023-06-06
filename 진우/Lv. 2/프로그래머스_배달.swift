//
//  프로그래머스_배달.swift
//  algorithm
//
//  Created by 김진우 on 2023/04/11.
//
// 느낀점: 다익스트라 알고리즘을 처음 써보는 문제였다 이해가 조금 어려웠지만 논리는 이해했다.
// 다른 문제들을 풀면서 숙련도를 올려야겠다
// https://school.programmers.co.kr/learn/courses/30/lessons/12978#
// 참고 자료: https://blog.naver.com/ndb796/221234424646

import Foundation

func 프로그래머스_배달(_ N:Int, _ road:[[Int]], _ k:Int) -> Int {
    var node = [[Int]](repeating: [Int](repeating: 10000000, count: N + 1), count: N + 1)
    var visit = [Bool](repeating: false, count: N + 1)
    var gap = [Int](repeating: 1000000, count: N + 1)
    let startIndex = 1
    
    func getMinIndex() -> Int {
        var min = 10000000
        var index = 0
        for i in 1...N {
            if gap[i] < min && !visit[i] {
                min = gap[i]
                index = i
            }
        }
        
        return index
    }
    
    for visitRoad in road {
        let minNum = min(visitRoad[0], visitRoad[1])
        let maxNum = max(visitRoad[0], visitRoad[1])
        node[minNum][maxNum] = node[minNum][maxNum] > visitRoad[2] ? visitRoad[2] : node[minNum][maxNum]
        node[maxNum][minNum] = node[maxNum][minNum] > visitRoad[2] ? visitRoad[2] : node[maxNum][minNum]
    }
    
    for i in 1...N {
        node[i][i] = 0
        gap[i] = node[startIndex][i]
    }
    
    visit[startIndex] = true
    
    for _ in 1...N {
        let current = getMinIndex()
        visit[current] = true
        for j in 1...N where !visit[j] {
            if gap[current] + node[current][j] < gap[j] {
                gap[j] = gap[current] + node[current][j]
            }
        }
    }
    
    return gap.filter {
        if $0 <= k {
            return true
        } else {
            return false
        }
    }.count
}
