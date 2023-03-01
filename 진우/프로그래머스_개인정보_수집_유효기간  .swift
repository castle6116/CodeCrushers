//
//  프로그래머스_개인정보_수집_유효기간  .swift
//  algorithm
//
//  Created by 김진우 on 2023/03/01.
//

import Foundation

//"2022.05.19",
//["A 6", "B 12", "C 3"],
//["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]

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
