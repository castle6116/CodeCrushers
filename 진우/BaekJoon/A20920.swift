//
//  A20920.swift
//  algorithm
//
//  Created by 김진우 on 2/17/24.
//

import Foundation

func A20920() {
    let input_num = readLine()!.split(separator: " ").map{Int($0)!}
    var words = [String: Int]()
    var result = ""
    
    for i in 0..<input_num[0] {
        let word = readLine()!
        
        if word.count < input_num[1] { continue }
        
        if words[word] == nil {
            words[word] = 1
        } else {
            words[word]! += 1
        }
    }
    
    words.sorted(by: {
        if $0.value > $1.value {
            return true
        } else if $0.value == $1.value {
            if $0.key.count > $1.key.count {
                return true
            } else if $0.key.count == $1.key.count {
                return $0 < $1 ? true : false
            } else {
                return false
            }
        }
        return false
    }).forEach {
        result += "\($0.key)\n"
    }
    
    print(result)
}
