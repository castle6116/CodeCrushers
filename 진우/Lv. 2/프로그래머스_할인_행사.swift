//
//  프로그래머스_할인_행사.swift
//  algorithm
//
//  Created by 김진우 on 2023/03/14.
//
// https://school.programmers.co.kr/learn/courses/30/lessons/131127
// 느낀점 : 처음에 살 수 있는 날을 return 하는 줄 알고 풀었는데 정답이 안나와서 이상하게 생각하고 보니 해당되는 모든 날을 체크해서 반환하는거였다.
// 문제를 꼼꼼히 읽도록 하자

import Foundation

func 프로그래머스_할인_행사(_ want:[String], _ number:[Int], _ discount:[String]) -> Int {
    var wantDicOrigin = [String: Int]()
    var wantDic = [String: Int]()
    var result = 0
    
    for i in 0..<want.count {
        wantDicOrigin[want[i]] = number[i]
    }
    
    wantDic = wantDicOrigin
    
    for i in 0...discount.count - 10 {
        for j in 0..<10 {
            if wantDic[discount[i + j]] != nil {
                if wantDic[discount[i + j]]! > 0 {
                    wantDic[discount[i + j]]! -= 1
                } else {
                    break
                }
            } else {
                break
            }
        }
        
        if wantDic.filter { $0.value != 0 }.count == 0 {
            result += 1
        }
        
        wantDic = wantDicOrigin
    }
    
    return result
}
