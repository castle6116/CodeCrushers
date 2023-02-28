//
//  프로그래머스_카드뭉치.swift
//  algorithm
//
//  Created by 김진우 on 2023/02/25.
//

import Foundation

func 프로그래머스_카드뭉치(_ cards1:[String], _ cards2:[String], _ goal:[String]) -> String {
    var cards1 = cards1
    var cardIndex = 0
    var cards2 = cards2
    var cardIndex2 = 0
    
    for (index,value) in goal.enumerated() {
        if cards1.count > cardIndex && cards1[cardIndex].contains(value) {
            cards1[cardIndex] = ""
            cardIndex += 1
        } else if cards2.count > cardIndex2 && cards2[cardIndex2].contains(value) {
            cards2[cardIndex2] = ""
            cardIndex2 += 1
        } else {
            return "No"
        }
    }
    return "Yes"
}
