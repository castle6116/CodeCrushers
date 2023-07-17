//
//  프로그래머스_괄호_변환.swift
//  algorithm
//
//  Created by 김진우 on 2023/06/29.
//

import Foundation

func 프로그래머스_괄호_변환(_ p:String) -> String {
    func first(_ s: String) -> String {
        var s = s.map{String($0)}
        var leftCount = 0
        var rightCount = 0
        var u = ""
        var v = ""
        if s.isEmpty {
            return ""
        }
        s.reverse()
        for _ in 0..<s.count {
            guard let char = s.popLast() else { return "" }
            if char == ")" {
                rightCount += 1
            } else {
                leftCount += 1
            }
            u.append(char)

            if leftCount == rightCount {
                v = s.reversed().flatMap{$0}.joined()
                if !check(u) {
                    var item = first(v)
                    return "(\(item))" + two(u)
                } else {
                    return u + first(v)
                }
            }
        }
        
        return ""
    }
    
    func two(_ s: String) -> String {
        var result = ""
        for (index, value) in s.enumerated() where index != 0 && index != s.count - 1 {
            if value == "(" {
                result += ")"
            } else {
                result += "("
            }
        }
        return result
    }
    
    func check(_ s: String) -> Bool {
        var count = 0
        for a in s {
            if a == "(" {
                count += 1
            } else {
                count -= 1
            }
            
            if count < 0 {
                break
            }
        }
        
        return count == 0 ? true : false
    }
    
    return first(p)
}
