//
//  프로그래머스_수식_최대화.swift
//  algorithm
//
//  Created by 김진우 on 2023/06/26.
//

import Foundation

func 프로그래머스_수식_최대화(_ expression:String) -> Int64 {
    enum Operation: Character {
        case multi = "*"
        case plus = "+"
        case minus = "-"
        
        func operate(_ n: Int64, _ n2: Int64) -> Int64 {
            switch self {
            case .multi:
                return n * n2
            case .plus:
                return n + n2
            case .minus:
                return n - n2
            }
        }
    }
    
    func operate(numbers: [Int64], opers: [Character], prior: [Operation]) -> Int64 {
        var numbers = numbers
        var opers = opers
        for oper in prior {
            while let index = opers.firstIndex(of: oper.rawValue) {
                numbers[index] = oper.operate(numbers[index], numbers[index+1])
                numbers.remove(at: index+1)
                opers.remove(at: index)
            }
        }
        return abs(numbers[0])
    }
    
    let list = [["*", "+", "-"], ["*", "-", "+"],
                ["+", "*", "-"], ["+", "-", "*"],
                ["-", "*", "+"], ["-", "+", "*"]]
    let numbers = expression.components(separatedBy: ["*", "+", "-"]).map{abs(Int64($0)!)}
    let opers = Array(expression.filter{ Int(String($0)) == nil })
    var maxValue: Int64 = 0

    for oper in list {
        var expression = expression
        let result = operate(numbers: numbers, opers: opers, prior: [
            Operation(rawValue: Character(oper[0]))!,
            Operation(rawValue: Character(oper[1]))!,
            Operation(rawValue: Character(oper[2]))!
        ])
        maxValue = max(maxValue, result)
    }
    
    return maxValue
}
