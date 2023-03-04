//
//  프로그래머스_문자열나누기.swift
//  algorithm
//
//  Created by 김진우 on 2023/02/18.
//

import Foundation

func 프로그래머스_문자열나누기(_ s:String) -> Int {
    var result = [String]()
    var count = 0
    var difCount = 0
    var itemCount = 0
    var beforeItem = ""
    var item = ""
    
    for cha in s.map{String($0)} {
        itemCount += 1
        if beforeItem == "" {
            item = cha
            beforeItem = cha
            count += 1
            
            if itemCount == s.count {
                result.append(item)
                break
            }
            
            continue
        }
        
        if beforeItem == cha {
            count += 1
            item += cha
        } else {
            difCount += 1
            item += cha
        }
        
        if difCount == count {
            result.append(item)
            item = ""
            beforeItem = ""
            difCount = 0
            count = 0
            continue
        }
        
        if itemCount == s.count {
            result.append(item)
            break
        }
    }
    print(result)
    
    return result.count
}
