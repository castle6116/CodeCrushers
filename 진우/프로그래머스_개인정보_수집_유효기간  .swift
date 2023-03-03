//
//  프로그래머스_개인정보_수집_유효기간  .swift
//  algorithm
//
//  Created by 김진우 on 2023/03/01.
//
// https://school.programmers.co.kr/learn/courses/30/lessons/150370
// 느낀점: 날자 계산까지는 쉬웠는데 if문에서 머리 과부화와서 시간이 조금 걸렸다.

import Foundation

func 프로그래머스_개인정보_수집_유효기간(_ today:String, _ terms:[String], _ privacies:[String]) -> [Int] {
    var item = [String: Int]()
    let termsList = terms.map{$0.components(separatedBy: " ")}
        .forEach { list in
            item[list[0]] = Int(list[1])! * 28
        }
    let today = today.components(separatedBy: ".")
    var deleteList = [Int]()
    
    func reserach(_ today: [String], _ privacie: [String], _ termsDay: Int) -> Bool {
        var today = today.map{Int($0)!}
        var privacie = privacie.map{Int($0)!}
        var termsDay = termsDay - 1
        
        while termsDay > 0 {
            termsDay -= 1
            privacie[2] += 1
            if privacie[2] > 28 {
                privacie[1] += 1
                privacie[2] = 1
            }
            
            if privacie[1] > 12 {
                privacie[0] += 1
                privacie[1] = 1
            }
        }
        
        if today[0] < privacie[0] {
            return false
        } else if today[0] == privacie[0] {
            if today[1] < privacie[1] {
                return false
            } else if today[1] == privacie[1] {
                if today[2] <= privacie[2] {
                    return false
                }
            }
        }

        return true
    }
    
    for (index, privacie) in privacies.enumerated() {
        var privacie = privacie.components(separatedBy: " ")
        var result = reserach(today, privacie[0].components(separatedBy: "."), item[privacie.last!]!)
        
        if result == true {
            deleteList.append(index + 1)
        }
    }
    
    return deleteList
}
