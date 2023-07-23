//
//  프로그래머스_전력망을_둘로_나누기.swift
//  algorithm
//
//  Created by 김진우 on 2023/07/01.
//

import Foundation

func 프로그래머스_전력망을_둘로_나누기(_ n:Int, _ wires:[[Int]]) -> Int {
    
    var answer = n + 1
    
    for i in 0..<wires.count {
        var isVisitedNode:[Int] = [Int](repeating: 0, count: n+1)
        var wireGraph:[[Int]] = [[Int]](repeating: [Int](repeating: 0, count: n+1), count: n+1)
        
        // init
        for j in 0..<wires.count {
            if j == i {
                continue
            }
            wireGraph[wires[j][0]][wires[j][1]] = 1
            wireGraph[wires[j][1]][wires[j][0]] = 1
        }
        
        // count by bfs
        var queue:[Int] = [1]
        isVisitedNode[1] = 1
        
        while true {
            if queue.isEmpty {
                break
            }
            
            var canGo:[Int] = [Int]()
            for j in queue {
                for k in 0..<wireGraph[j].count {
                    if isVisitedNode[k] == 0 && wireGraph[j][k] == 1{
                        canGo.append(k)
                        isVisitedNode[k] = 1
                    }
                }
            }
            
            queue = canGo
        }
        
        var nodeCount = 0
        for j in isVisitedNode {
            if j == 1 {
                nodeCount += 1
            }
        }
        
        let currentAnswer = abs((n - nodeCount) - (nodeCount))
        if currentAnswer < answer {
            answer = currentAnswer
        }
    }
    
    return answer
}




















// 트리로 풀어 봄
/*
func 프로그래머스_전력망을_둘로_나누기(_ n:Int, _ wires:[[Int]]) -> Int {
    struct Tree {
        var value: Int
        var children = [Tree]()
        
        public init(_ value: Int) {
            self.value = value // 값으로 초기화 하기.
        }
        
        public mutating func add(_ child: Tree) { // 노드에 자식노드 추가하기.
            children.append(child)  // 자식노드 배열로 구현했으므로 append 메소드 사용가능!
        }

        func treeLines(_ nodeIndent: String = "", _ childIndent: String = "") -> [String] {
            return [ nodeIndent + String(value) ] + children.enumerated().map { ($0 < children.count - 1, $1) }
                .flatMap { $0 ? $1.treeLines("┣╸", "┃ ") : $1.treeLines("┗╸", "  ") }
                .map { childIndent + $0 }
        }

        func printTree() {
            print(treeLines().joined(separator: "\n"))
        }
    }
    
    var wires = wires.sorted {
        $0[0] < $1[0]
    }
    
    var tree = Tree(1)
    var queue = [[Int]]()
    var nodeCount = Set<Int>()
    var minV = Int.max
    
    func addNode(_ tree: inout Tree, _ num: [Int]) {
        if tree.value == num[0] {
            tree.add(Tree(num[1]))
        } else if tree.value == num[1] {
            tree.add(Tree(num[0]))
        } else {
            if search(tree, num) {
                tree = childNode(tree, num)
            } else {
                queue.append(num)
            }
        }
    }
    
    func childNode(_ tree: Tree, _ num: [Int]) -> Tree {
        var tree = tree
        if tree.value == num[0] {
            tree.add(Tree(num[1]))
        } else if tree.value == num[1] {
            tree.add(Tree(num[0]))
        } else {
            for (index, value) in tree.children.enumerated() {
                tree.children[index] = childNode(value, num)
            }
        }
        return tree
    }
    
    func search(_ tree: Tree, _ num: [Int]) -> Bool {
        if tree.value == num[0] || tree.value == num[1] {
            return true
        } else {
            for i in tree.children where search(i, num) {
                return true
            }
        }
        
        return false
    }
    
    func countPlus(_ tree: Tree) -> Int {
        var count = 1
        if !tree.children.isEmpty {
            for i in tree.children {
                count += countPlus(i)
            }
        }
        nodeCount.insert(count)
        return count
    }
    
    for i in wires {
        addNode(&tree, i)
    }
    
    while !queue.isEmpty {
        guard let queue = queue.popLast() else { break }
        addNode(&tree, queue)
    }
    
    _ = countPlus(tree)
    
    tree.printTree()
    for i in nodeCount.sorted(by: >).filter({ n / 2 - $0 >= 0 }) where minV >= n - i - i {
        minV = n - i - i
    }
    
    return minV
}
*/
