//
//  프로그래머스_성격_유형_검사하기.swift
//  algorithm
//
//  Created by 김진우 on 2023/03/01.
//
// https://school.programmers.co.kr/learn/courses/30/lessons/118666
// 느낀점 : 마지막 result를 map으로 하니 버전차이가 나서 그런지 문제가 생겼다 Generic 타입이 안맞다고 하는데..
// 구 버전에 비해서 map의 함수가 Self.Element -> Element로 바껴있었다. 그래서 forEach로 변경하니 문제없이 잘 풀렸다
// 엄청 어렵지는 않았는데 적당하게 생각을 많이 한 듯한 문제이다

import Foundation

func 프로그래머스_성격_유형_검사하기(_ survey: [String], _ choices: [Int]) -> String {
    var result = [["R": 0, "T": 0],
                  ["C": 0, "F": 0],
                  ["J": 0, "M": 0],
                  ["A": 0, "N": 0]]
    var item = ["R": 0, "T": 0, "C": 1, "F": 1, "J": 2, "M": 2, "A": 3, "N": 3]
    
    for (index, st) in survey.enumerated() {
        var st = st.map{String($0)}
        var resultIndex = item[st[0]]!
        
        if (1...3) ~= choices[index] {
            result[resultIndex][st[0]]! += 4 - choices[index]
        } else if (5...7) ~= choices[index] {
            result[resultIndex][st[1]]! += choices[index] - 4
        }
    }
    var gap = [String]()
    result.forEach { item in
        var st = "Z"
        var num = 0
        
        item.forEach { (key, value) in
            if num < value {
                st = key
                num = value
            } else if num == value {
                if st > key {
                    st = key
                }
            }
        }
        gap.append(st)
    }
    
    return gap.joined()
}
