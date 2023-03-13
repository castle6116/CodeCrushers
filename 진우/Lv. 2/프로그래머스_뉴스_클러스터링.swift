//
//  프로그래머스_뉴스_클러스터링.swift
//  algorithm
//
//  Created by 김진우 on 2023/03/13.
//
// https://school.programmers.co.kr/learn/courses/30/lessons/17677
// 느낀점: 영어, 숫자 다 받아버려서 문제가 생겼다. 문제를 좀 더 잘 읽자 그리고 정규식은 공부를 더 해야할 듯 하다


import Foundation

func 프로그래머스_뉴스_클러스터링(_ str1: String, _ str2: String) -> Int {
    let str1 = Array(str1.lowercased())
    let str2 = Array(str2.lowercased())
    var str1Wonso = [String : Int]()
    var str2Wonso = [String : Int]()
    var result = 0.0
    var gau = [String]()
    var hap = [String]()
    
    for i in 0..<str1.count - 1 {
        if "\(str1[i])\(str1[i + 1])".hasCharacters() {
            if str1Wonso["\(str1[i])\(str1[i + 1])"] == nil {
                str1Wonso["\(str1[i])\(str1[i + 1])"] = 1
            } else {
                str1Wonso["\(str1[i])\(str1[i + 1])"]! += 1
            }
        }
    }
    
    for i in 0..<str2.count - 1 {
        if "\(str2[i])\(str2[i + 1])".hasCharacters() {
            if str2Wonso["\(str2[i])\(str2[i + 1])"] == nil {
                str2Wonso["\(str2[i])\(str2[i + 1])"] = 1
            } else {
                str2Wonso["\(str2[i])\(str2[i + 1])"]! += 1
            }
        }
    }
    
    for st in str1Wonso {
        var strInt = 0
        if str2Wonso[st.key] != nil {
            strInt = str2Wonso[st.key]!
            for _ in 0..<min(st.value, str2Wonso[st.key]!) {
                gau.append(st.key)
            }
        }
        
        for _ in 0..<max(st.value, strInt) {
            hap.append(st.key)
        }
        
        str1Wonso[st.key] = nil
        
        if str2Wonso[st.key] != nil {
            str2Wonso[st.key] = nil
        }
    }
    
    for st in str2Wonso {
        for _ in 0..<st.value {
            hap.append(st.key)
        }
    }
    
    result = Double(gau.count) / Double(hap.count)
    if gau.count == 0 && hap.count == 0 {
        result = 65536
    } else {
        result *= 65536
    }
    return Int(result)
}

extension String {
    func hasCharacters() -> Bool{
        do{
            let regex = try NSRegularExpression(pattern: "^[a-zA-Z]*$", options: .caseInsensitive)
            if let _ = regex.firstMatch(in: self, options: NSRegularExpression.MatchingOptions.reportCompletion, range: NSMakeRange(0, self.count)){
                return true
            }
        }catch{
            print(error.localizedDescription)
            return false
        }
        return false
    }
    
}
