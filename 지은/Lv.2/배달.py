# Dijkstra - 최대 2.61ms
import heapq

def dijkstra(n, roads):
    graph = [[] for _ in range(n + 1)]

    for start, end, time in roads:
        graph[start].append((end, time))
        graph[end].append((start, time))

    shortest = [float('inf')] * (n + 1)
    
    shortest[1] = 0
    queue = []
    heapq.heappush(queue, (0, 1))

    while queue:
        curr_dist, curr_node = heapq.heappop(queue)
        if shortest[curr_node] < curr_dist:
            continue

        for adj, dist in graph[curr_node]:
            distance = curr_dist + dist
            if distance < shortest[adj]:
                shortest[adj] = distance
                heapq.heappush(queue, (distance, adj))
    return shortest

def solution(N, road, K):
    shortest = dijkstra(N, road)
    count = 0
    for distance in shortest:
        if distance <= K:
            count += 1

    return count

# 다른 사람의 풀이 - 최대 33ms
def solution(N, road, K):
    costs = [float('inf')] * (N + 1)
    costs[1] = 0
    parents = [1]          
    while (parents):
        parent = parents.pop(0)
        for a, b, cost in road:
            if (a == parent or b == parent):
                target = b if a == parent else a
                if costs[target] > costs[parent] + cost:
                    costs[target] = costs[parent] + cost
                    parents.append(target)

    return sum(1 for c in costs if c <= K)


# heapq 안써도 되는구나 - 최대 5.45ms, 느리다.
# heappush 연산은 O(log n)의 시간 복잡도를 가진다
# 반면, 일반 리스트 사용: 리스트의 끝에 원소를 추가하는 연산은 O(1)의 시간 복잡도.(cf. 최소 거리 노드를 찾기 위해 리스트를 정렬해야 할 경우 O(n log n)의 시간 복잡도 발생)
def dijkstra(n, roads):
    graph = [[] for _ in range(n + 1)]

    for start, end, time in roads:
        graph[start].append((end, time))
        graph[end].append((start, time))

    shortest = [float('inf')] * (n + 1)
    
    shortest[1] = 0
    queue = [(0, 1)]

    while queue:
        curr_dist, curr_node = queue.pop()
        if shortest[curr_node] < curr_dist:
            continue

        for adj, dist in graph[curr_node]:
            distance = curr_dist + dist
            if distance < shortest[adj]:
                shortest[adj] = distance
                queue.append((distance, adj))
    return shortest

def solution(N, road, K):
    shortest = dijkstra(N, road)
    count = 0
    for distance in shortest:
        if distance <= K:
            count += 1

    return count