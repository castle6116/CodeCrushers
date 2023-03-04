//
//  프로그래머스_옹알이(2).swift
//  algorithm
//
//  Created by 김진우 on 2023/02/18.
//
// https://school.programmers.co.kr/learn/courses/30/lessons/133499
// 풀다 느낀점 : 앞에서 문자열 하나씩 체크하면서 하면 결국 안되는게 나오는데 왜 이 생각을 못했을까?

import Foundation

func 프로그래머스_옹알이2(_ babbling:[String]) -> Int {
    let joka = ["aya", "ye", "woo", "ma"]
    var item = 0
    
    for st in babbling {
        var list = ""
        var lastword = ""
        
        for st_list in st.map{String($0)} {
            list += st_list
            if joka.contains(list) && list != lastword {
                lastword = list
                list = ""
            }
        }
        
        if list == "" {
            item += 1
        }
        
    }
    
    return item
}
