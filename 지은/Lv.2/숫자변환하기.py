# DFS 런타임에러
import heapq
from collections import deque


def solution(x, y, n):
    memo = {}

    def dfs(curr, count):
        if curr > y:
            return float('inf')

        if curr == y:
            return count

        if (curr, count) in memo:
            return memo[(curr, count)]

        add_n = dfs(curr + n, count + 1)
        multiply_2 = dfs(curr * 2, count + 1)
        multiply_3 = dfs(curr * 3, count + 1)

        memo[(curr, count)] = min(add_n, multiply_2, multiply_3)
        return memo[(curr, count)]

    result = dfs(x, 0)
    return result if result != float('inf') else -1

# 반복구조, 시간초과


def solution(x, y, n):
    visited = set()
    stack = [(x, 0)]

    min_operations = float('inf')

    while stack:
        current, count = stack.pop(0)

        if current == y:
            min_operations = min(min_operations, count)

        if current in visited:
            continue

        visited.add(current)

        if current + n <= y:
            stack.append((current + n, count + 1))

        if current * 2 <= y:
            stack.append((current * 2, count + 1))

        if current * 3 <= y:
            stack.append((current * 3, count + 1))

    return min_operations if min_operations != float('inf') else -1


# BFS로 하는것이 더 적절하다.


def solution(x, y, n):
    visited = set()
    queue = deque([(x, 0)])

    while queue:
        current, count = queue.popleft()

        if current == y:
            return count

        if current in visited:
            continue

        visited.add(current)

        if current + n <= y:
            queue.append((current + n, count + 1))

        if current * 2 <= y:
            queue.append((current * 2, count + 1))

        if current * 3 <= y:
            queue.append((current * 3, count + 1))

    return -1


# 다른 사람의 풀이 - dp(tabluation)
def solution(x, y, n):
    dp = [float('inf')]*(y+1)
    dp[x] = 0
    for i in range(x, y+1):
        if dp[i] == float('inf'):
            continue
        if i+n <= y:
            dp[i+n] = min(dp[i+n], dp[i]+1)
        if i*2 <= y:
            dp[i*2] = min(dp[i*2], dp[i]+1)
        if i*3 <= y:
            dp[i*3] = min(dp[i*3], dp[i]+1)

    if dp[y] == float('inf'):
        return -1
    else:
        return dp[y]


# 다른 사람의 풀이 - heap

def solution(x, y, n):
    heap = []
    heapq.heappush(heap, [0, y])

    while heap:
        count, value = heapq.heappop(heap)

        if value == x:
            return count

        if value % 2 == 0:
            heapq.heappush(heap, [count+1, value // 2])
        if value % 3 == 0:
            heapq.heappush(heap, [count+1, value // 3])
        if value - n >= x:
            heapq.heappush(heap, [count+1, value - n])

    return -1
