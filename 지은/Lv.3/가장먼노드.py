# DFS - 런타임에러
from collections import defaultdict

def solution(n, vertex):
    graph = defaultdict(list)
    for a, b in vertex:
        graph[a].append(b)
        graph[b].append(a)

    visited = [False] * (n + 1)
    distances = [0] * (n + 1)

    def dfs(node, distance):
        nonlocal distances
        visited[node] = True
        distances[node] = distance
        for neighbor in graph[node]:

            if not visited[neighbor]:
                dfs(neighbor, distance + 1)
            elif distances[neighbor] > distance + 1:
                dfs(neighbor, distance + 1)

    dfs(1, 0)

    max_distance = max(distances)
    return distances.count(max_distance)
 
# 반복구조로 바꿈. 시간초과
from collections import defaultdict

def solution(n, vertex):
    graph = defaultdict(list)
    for a, b in vertex:
        graph[a].append(b)
        graph[b].append(a)

    visited = [False] * (n + 1)
    distances = [0] * (n + 1)

    stack = [(1, 0)]

    while stack:
        node, distance = stack.pop()
        if not visited[node] or distances[node] > distance:
            visited[node] = True
            distances[node] = distance
            for neighbor in graph[node]:
                stack.append((neighbor, distance + 1))

    max_distance = max(distances)
    return distances.count(max_distance)


# BFS로 시도. 런타임 에러
from collections import defaultdict

def solution(n, vertex):
    graph = defaultdict(list)
    for a, b in vertex:
        graph[a].append(b)
        graph[b].append(a)

    visited = [False] * (n + 1)
    distances = [0] * (n + 1)
    visited[1] = True

    def bfs(queue):
        if not queue:
            return

        node, distance = queue.pop(0)
        distances[node] = distance

        for neighbor in graph[node]:
            if not visited[neighbor]:
                visited[neighbor] = True
                queue.append((neighbor, distance + 1))
        bfs(queue)

    bfs([(1, 0)])

    max_distance = max(distances)
    return distances.count(max_distance)


# 재귀 BFS를 반복구조로 다시 바꿈
from collections import defaultdict, deque

def solution(n, vertex):
    graph = defaultdict(list)
    for a, b in vertex:
        graph[a].append(b)
        graph[b].append(a)

    visited = [False] * (n + 1)
    distances = [0] * (n + 1)
    visited[1] = True

    queue = deque([(1, 0)])

    while queue:
        node, distance = queue.popleft()
        distances[node] = distance
        for neighbor in graph[node]:
            if not visited[neighbor]:
                visited[neighbor] = True
                queue.append((neighbor, distance + 1))

    max_distance = max(distances)
    return distances.count(max_distance)


# 정리
# DFS와 BFS를 언제 써야하는지 헷갈린다.

# Shortest path(BFS): BFS is the better choice, as it explores all nodes at a given depth before moving on to the nodes at the next depth level. DFS, on the other hand, goes as deep as possible before backtracking, which could result in a non-optimal path.

# Space complexity(DFS): DFS usually has lower space complexity than BFS, as it only needs to store the nodes on the current path, whereas BFS needs to store all the nodes at the current depth level. If memory usage is a concern, DFS might be a better choice.

# Implementation: BFS는 주로 queue로. DFS를 할거면 재귀가 좀 더 가독성 좋다.

# Tree traversal: Both.