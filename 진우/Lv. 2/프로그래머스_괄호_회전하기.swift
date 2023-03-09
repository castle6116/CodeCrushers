//
//  프로그래머스_괄호_회전하기.swift
//  algorithm
//
//  Created by 김진우 on 2023/03/04.
//
// https://school.programmers.co.kr/learn/courses/30/lessons/76502
// 느낀점 : 크게 어렵진 않았다

import Foundation

func 프로그래머스_괄호_회전하기(_ s:String) -> Int {
    var s = s.map{String($0)}
    var result = 0
    
    for i in 0..<s.count {
        let check = check(s)
        if check == true {
            result += 1
        }
        let firstItem = s.removeFirst()
        s.append(firstItem)
    }
    
    func check(_ s: [String]) -> Bool {
        var stack = [String]()
        
        for st in s {
            let last = stack.last
            if st == "}" || st == "]" || st == ")" {
                if last == "{" && st == "}" || last == "[" && st == "]" || last == "(" && st == ")"{
                    _ = stack.popLast()
                    continue
                }
            }
            
            stack.append(st)
        }
        
        return stack.count == 0 ? true : false
    }
    
    return result
}
