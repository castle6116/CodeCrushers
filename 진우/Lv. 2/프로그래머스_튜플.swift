//
//  프로그래머스_튜플.swift
//  algorithm
//
//  Created by 김진우 on 2023/03/09.
//
// https://school.programmers.co.kr/learn/courses/30/lessons/64065
// 느낀 점: 내가 푼 방법도 Xcode에서는 문제 없이 돌아가는데 프로그래머스에서는 정상적으로 작동되지 않았다.
// 추측하기에 Swift버전이 달라서 그런 듯 한데.. 아이디어 조금만 바꿔서 했다면 고차함수 사용 횟수를 줄일 수 있었을 탠데 조금 아쉬운 문제이다.

import Foundation

func 프로그래머스_튜플(_ s:String) -> [Int] {
    // 인터넷에서 들고 온 방법
    var s = s
    var answer = [Int]()
    
    s.removeFirst(2)
    s.removeLast(2)
    
    s.components(separatedBy: "},{").map { $0.components(separatedBy: ",").map { Int($0)! } }
        .sorted { $0.count < $1.count }
        .forEach {
            $0.forEach {
                if !answer.contains($0) {
                    answer.append($0)
                }
            }
        }
    
    return answer
    
    /* // 내가 푼 방법
     var item = s
     .components(separatedBy: "{")
     .joined()
     .components(separatedBy: "}")
     .filter {$0 != ""}
     .map{[$0]}
     .map{
     var item = [String]()
     $0.forEach {
     item.append(contentsOf: $0.components(separatedBy: ",").filter{$0 != ""})
     }
     return item
     }
     .sorted {
     $0.count < $1.count
     }
     
     var result = [Int]()
     
     item.forEach { list in
     list.forEach {
     if !result.contains(Int($0)!) {
     result.append(Int($0)!)
     }
     }
     }
     
     return result
     */
}
