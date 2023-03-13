//
//  프로그래머스_피로도.swift
//  algorithm
//
//  Created by 김진우 on 2023/03/13.
//
// https://school.programmers.co.kr/learn/courses/30/lessons/87946
// 느낀점: 완전탐색은 아직 익숙치 못하다 검색해서 하는 방법을 알아보고 문제에 적용시켜서 풀었다.
// 완전 탐색 문제를 더 풀면서 이해도를 높이고 숙지해보자

import Foundation

func 프로그래머스_피로도(_ k:Int, _ dungeons:[[Int]]) -> Int {
    var visit = [Bool](repeating: false, count: dungeons.count)
    var fatigueVisit = [Bool](repeating: false, count: dungeons.count)
    var fatigue = k
    var item = [Int]()
    var minValue = 0
    
    visitCheck(0)
    
    func visitCheck(_ num: Int) {
        for i in 0..<dungeons.count {
            if visit[i] { continue }
            visit[i] = true
            if fatigue >= dungeons[i][0] {
                fatigueVisit[i] = true
                fatigue -= dungeons[i][1]
                item.append(i + 1)
//                print("input : ", i + 1)
            }
//            print(item)
//            print("visit: ", visit)
//            print("fatigueVisit: ", fatigueVisit)
//            print(num + 1, i + 1)
//            print(fatigue)
//            print("---")
            visitCheck(i)
            visit[i] = false
            if fatigueVisit[i] {
                minValue = max(minValue, item.count)
                fatigue += dungeons[item.popLast()! - 1][1]
                fatigueVisit[i] = false
            }
        }
    }
    
    return minValue
}
