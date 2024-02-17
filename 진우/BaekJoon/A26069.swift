//
//  A26069.swift
//  algorithm
//
//  Created by 김진우 on 2/17/24.
//

import Foundation

func A26069() {
    let input_num = Int(readLine()!)!
    var name_list = ["ChongChong": 1]
    var count = 1
    
    for i in 0..<input_num {
        let input_name = readLine()!.components(separatedBy: " ")
        
        if name_list[input_name[0]] == 1 || name_list[input_name[1]] == 1 {
            if name_list[input_name[0]] == nil || name_list[input_name[1]] == nil {
                name_list[input_name[0]] = 1
                name_list[input_name[1]] = 1
                count += 1
            }
        }
    }
    print(count)
}
