//
//  프로그래머스_두_큐_합_같게_만들기.swift
//  algorithm
//
//  Created by 김진우 on 2023/04/23.
//
// 느낀 점: Queue 구조를 활용한 문제였는데 이게 Queue 문제인가..? 잘 모르겠네
// https://school.programmers.co.kr/learn/courses/30/lessons/118667

import Foundation

func 프로그래머스_두_큐_합_같게_만들기(_ queue1:[Int], _ queue2:[Int]) -> Int {
    var sumValue = (queue1.reduce(0, +) + queue2.reduce(0, +)) / 2
    var queueCount = queue1.count + queue2.count
    var queue1: Queue = Queue(queue1)
    var queue2: Queue = Queue(queue2)
    var queue1Sum = queue1.reduce()
    var count = 0
    
    struct Queue {
        private var index = 0
        var arrayValue = [Int]()
        
        init(_ array: [Int]) {
            self.arrayValue = array
        }
        
        mutating func dequeue() -> Int {
            if arrayValue.count <= index {
                return -1
            }
            
            defer {
                index += 1
            }
            
            return arrayValue[index]
        }
        
        mutating func enqueue(_ item: Int) {
            arrayValue.append(item)
        }
        
        func reduce() -> Int {
            var sum = 0
            for i in index..<arrayValue.count {
                sum += arrayValue[i]
            }
            return sum
        }
        
        func size() -> Int {
            return arrayValue.count - index
        }
    }

    while (queueCount * 4) >= count {
        count += 1
        if queue1Sum == sumValue {
            count -= 1
            break
        } else if queue1Sum > sumValue {
            let item = queue1.dequeue()
            queue1Sum -= item
        } else {
            let item = queue2.dequeue()
            queue1Sum += item
            queue1.enqueue(item)
            if item == -1 {
                return -1
            }
        }
    }
    
    return count
}
