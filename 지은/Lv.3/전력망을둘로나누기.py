from collections import defaultdict

def dfs(graph, start):
    visited = []
    stack = [start]

    while stack:
        node = stack.pop()
        if node not in visited:
            visited.append(node)
            stack.extend(graph[node])
            
    return visited

def solution(n, wires):
    answer = n
    graph = defaultdict(list)

    for a, b in wires:
        graph[a].append(b)
        graph[b].append(a)
    
    for a, b in wires:
        graph[a].remove(b)
        graph[b].remove(a)

        temp = min(len(dfs(graph, 1)), len(dfs(graph, b)))
        answer = min(answer, abs(n - temp - temp))
        graph[a].append(b)
        graph[b].append(a)

    return answer

