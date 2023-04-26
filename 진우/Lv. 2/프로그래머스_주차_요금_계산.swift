//
//  프로그래머스_주차_요금_계산.swift
//  algorithm
//
//  Created by 김진우 on 2023/03/15.
//
// https://school.programmers.co.kr/learn/courses/30/lessons/92341
// 느낀점: 크게 어려운점은 없었는데 로직 간소화가 더 될 듯한 느낌이라 나중에 정리해보자

import Foundation

func 프로그래머스_주차_요금_계산(_ fees:[Int], _ records:[String]) -> [Int] {
    var inOut = [String: String]()
    var carList = [String: Int]()
    var result = [Int]()
    
    for st in records {
        let st = st.components(separatedBy: " ")
        if st[2] == "IN" {
            inOut[st[1]] = st[0]
        } else {
            let inTime = inOut[st[1]]!.components(separatedBy: ":").map { Int($0)! }
            let outTime = st[0].components(separatedBy: ":").map { Int($0)! }
            let minute = (outTime[1] - inTime[1])
            let hours = outTime[0] - inTime[0]
            if carList[st[1]] == nil {
                carList[st[1]] = hours * 60 + minute
            } else {
                carList[st[1]]! += hours * 60 + minute
            }
            inOut[st[1]] = nil
        }
    }
    
    for inCheck in inOut {
        let inTime = inCheck.value.components(separatedBy: ":").map { Int($0)! }
        let outTime = [23, 59]
        let minute = outTime[1] - inTime[1]
        let hours = outTime[0] - inTime[0]
        if carList[inCheck.key] == nil {
            carList[inCheck.key] = hours * 60 + minute
        } else {
            carList[inCheck.key]! += hours * 60 + minute
        }
    }
    
    for (_, value) in carList.sorted { $0.key < $1.key } {
        var num = 0
        if value - fees[0] <= 0 {
            num = fees[1]
        } else {
            let valueAfter = (value - fees[0]) % fees[2] > 0 ? (value - fees[0]) / fees[2] + 1 : (value - fees[0]) / fees[2]
            num = valueAfter * fees[3] + fees[1]
        }
        result.append(num)
    }
    
    return result
}
