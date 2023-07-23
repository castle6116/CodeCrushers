# 런타임에러
# visited가 1차원 배열이라 매번 순회하면서 방문 여부를 조사해야함. 느리다.
# 파이썬은 재귀 호출 깊이 제한이 있어서 런타임 에러가 발생하는것 같다. dfs -> bfs
from collections import deque, defaultdict
import collections


def solution(maps):
    visited = []
    family = collections.defaultdict(int)
    group = 0

    def dfs(x, y, group):
        if [x, y] in visited:
            return
        visited.append([x, y])
        if x+1 < len(maps):
            if maps[x+1][y] != "X" and [x+1, y] not in visited:
                dfs(x+1, y, group)
        if y+1 < len(maps[0]):
            if maps[x][y+1] != "X" and [x, y+1] not in visited:
                dfs(x, y+1, group)
        if x-1 >= 0:
            if maps[x-1][y] != "X" and [x-1, y] not in visited:
                dfs(x-1, y, group)
        if y-1 >= 0:
            if maps[x][y-1] != "X" and [x, y-1] not in visited:
                dfs(x, y-1, group)

        family[group] += int(maps[x][y])

        return

    for x, k in enumerate(maps):
        for y, l in enumerate(k):
            if l == "X":
                continue
            else:
                if [x, y] not in visited:
                    dfs(x, y, group)
                group += 1

    ans = sorted(list(family.values()))
    return ans if len(ans) > 0 else [-1]


# 런타임에러 - bfs로 바꿔서 해결(deque, popleft) / 커서이동 간단하게 하기위해 dx,dy 사용


def solution(maps):
    visited = [[False]*len(maps[0]) for _ in range(len(maps))]
    family = defaultdict(int)
    group = 1

    dx = [-1, 0, 1, 0]
    dy = [0, 1, 0, -1]

    def bfs(x, y, group):
        queue = deque([(x, y)])
        while queue:
            x, y = queue.popleft()
            if visited[x][y]:
                continue
            visited[x][y] = True
            family[group] += int(maps[x][y])
            for i in range(4):
                nx, ny = x + dx[i], y + dy[i]
                if nx < 0 or nx >= len(maps) or ny < 0 or ny >= len(maps[0]) or maps[nx][ny] == "X":
                    continue
                queue.append((nx, ny))

    for i in range(len(maps)):
        for j in range(len(maps[0])):
            if maps[i][j] != "X" and not visited[i][j]:
                bfs(i, j, group)
                group += 1

    if not family:
        return [-1]
    return sorted(family.values())
