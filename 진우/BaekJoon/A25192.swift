//
//  A25192.swift
//  algorithm
//
//  Created by 김진우 on 2/17/24.
//

import Foundation

func A25192() {
    let input_num = Int(readLine()!)!
    var people = [String: Int]()
    var count = 0
    for i in 0..<input_num {
        let label = readLine()!
        
        if label == "ENTER" {
            people = [:]
        } else if people[label] == nil {
            people[label] = 1
            count += 1
        }
    }
    
    print(count)
}
