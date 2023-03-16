//
//  프로그래머스_오픈채팅방.swift
//  algorithm
//
//  Created by 김진우 on 2023/03/15.
//
// https://school.programmers.co.kr/learn/courses/30/lessons/42888
// 느낀 점: 구조체 활용해서 푸니까 크게 어렵진 않았다.

import Foundation

func 프로그래머스_오픈채팅방(_ record:[String]) -> [String] {
    var list = [String: people]()
    var inOut = [(String, String)]()
    var result = [String]()
    
    for st in record {
        var st = st.components(separatedBy: " ")
        
        if st[0] != "Change" {
            inOut.append((st[0], st[1]))
            if st[0] != "Leave" {
                list[st[1]] = people(name: st[2], uid: st[1])
            }
        } else {
            list[st[1]]?.name = st[2]
        }
    }
    
    for (come, name) in inOut {
        if come == "Enter" {
            result.append("\(list[name]!.name)님이 들어왔습니다.")
        } else if come == "Leave" {
            result.append("\(list[name]!.name)님이 나갔습니다.")
        }
    }
    
    return result
}

struct people {
    var name: String
    var uid: String
    
    init(name: String, uid: String) {
        self.name = name
        self.uid = uid
    }
}
