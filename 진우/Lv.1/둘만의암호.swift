//
//  둘만의암호.swift
//  algorithm
//
//  Created by 김진우 on 2023/02/13.
//

import Foundation
// https://school.programmers.co.kr/learn/courses/30/lessons/155652
// 큰 문제 없이 잘 푼듯함
// 효율적인 해결방안이 있을 듯 한데 더 생각해봐야할듯

func 프로그래머스_둘만의암호() {
    func solution(_ s:String, _ skip:String, _ index:Int) -> String {
        var alphabet = ["a", "b", "c", "d", "e",
                    "f", "g", "h", "i", "j",
                    "k", "l", "m", "n", "o",
                    "p", "q", "r", "s", "t",
                    "u", "v", "w", "x", "y", "z"]
        var indexList: [String: Int] = [:]
        var alphabetList: [Int: String] = [:]
        let skipAlphabet = skip.map{String($0)}
        var result = ""
        var count = 0
        
        alphabet = alphabet.filter{ !skipAlphabet.contains($0) }
        for (index, value) in alphabet.enumerated() {
            indexList[value] = index
            alphabetList[index] = value
        }
        count = indexList.count - 1

        for st in s.map({String($0)}) {
            var stringIndex = indexList[st]! + index
            while stringIndex > count {
                stringIndex -= count + 1
            }
            result = "\(result)\(alphabetList[stringIndex]!)"
        }
        
        return result
    }
}
