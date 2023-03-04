//
//  프로그래머스_키패드_누르기.swift
//  algorithm
//
//  Created by 김진우 on 2023/03/01.
//
// https://school.programmers.co.kr/learn/courses/30/lessons/67256
// 중앙에 손이 가 있을 때 위치 계산이 정상적으로 작동 되지 않아서 이상하게 작동함
// ex) left = 4 , right = 2, clike = 5
// left = 1칸, right = 1칸 이면 주 손으로 써야하는데 지금 계산상으로는 left = 1칸, right = 2칸으로 계산됨 수정하자
// 느낀점: Tuple 써서 손이 중간에 있으면 + 1 을 하지않아 대각선으로 움직일 때 1번 더 추가되는걸 없애줬다

import Foundation

func 프로그래머스_키패드_누르기(_ numbers:[Int], _ hand:String) -> String {
    var pinger = ["1": (1, 1), "2": (1, 2), "3": (1, 3),
                  "4": (2, 1), "5": (2, 2), "6": (2, 3),
                  "7": (3, 1), "8": (3, 2), "9": (3, 3),
                  "*": (4, 1), "0": (4, 2), "#": (4, 3)]
    var leftPinger = "*"
    var rightPinger = "#"
    var result = ""
    
    for i in numbers.map{String($0)} {
        var leftValue = 0
        var rightValue = 0
        
        if i == "1" || i == "4" || i == "7" {
            result += "L"
            leftPinger = i
        } else if i == "3" || i == "6" || i == "9" {
            result += "R"
            rightPinger = i
        } else {
            leftValue = abs(pinger[i]!.0 - pinger[leftPinger]!.0) + 1
            rightValue = abs(pinger[i]!.0 - pinger[rightPinger]!.0) + 1
            
            if pinger[leftPinger]!.1 == 2 {
                leftValue = abs(pinger[i]!.0 - pinger[leftPinger]!.0)
            }
            
            if pinger[rightPinger]!.1 == 2 {
                rightValue = abs(pinger[i]!.0 - pinger[rightPinger]!.0)
            }
            
            if leftValue == rightValue {
                if hand == "right" {
                    result += "R"
                    rightPinger = i
                } else {
                    result += "L"
                    leftPinger = i
                }
            } else if leftValue > rightValue{
                result += "R"
                rightPinger = i
            } else {
                result += "L"
                leftPinger = i
            }
        }
    }
    
    return result
}
