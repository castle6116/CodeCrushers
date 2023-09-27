import collections


def solution(maps):
    dx = [1, 0, -1, 0]
    dy = [0, 1, 0, -1]
    min_cost = float('inf')
    start_point = (0, 0)
    for x, row in enumerate(maps):
        for y, col in enumerate(row):
            if col == "S":
                start_point = (x, y)

    def bfs(point, cost, visited, levered):
        nonlocal min_cost
        x, y = point
        new_levered = levered

        if maps[x][y] == "L":
            new_levered = True

        if levered and maps[x][y] == "E":
            min_cost = min(cost, min_cost)
            return

        for i in range(4):
            nx = x+dx[i]
            ny = y+dy[i]
            if nx >= len(maps) or ny >= len(maps[0]) or nx < 0 or ny < 0:
                continue

            if maps[nx][ny] != "X" and (nx, ny, new_levered) not in visited:
                visited.add((nx, ny, new_levered))
                queue.append(((nx, ny), cost + 1, visited, new_levered))
        return

    queue = collections.deque([(start_point, 0, set(), False)])
    while queue:
        start_point, cost, visited, levered = queue.popleft()
        bfs(start_point, cost, visited, levered)
    return min_cost if not min_cost == float('inf') else -1


# 두번재 풀이


def solution(maps):
    dx = [1, 0, -1, 0]
    dy = [0, 1, 0, -1]

    n, m = len(maps), len(maps[0])
    start_point = None
    end_point = None

    for i in range(n):
        for j in range(m):
            if maps[i][j] == "S":
                start_point = (i, j)
            if maps[i][j] == "E":
                end_point = (i, j)

    def is_valid(nx, ny):
        return 0 <= nx < n and 0 <= ny < m and maps[nx][ny] != "X"

    def bfs():
        visited = set()
        queue = collections.deque([(start_point, 0, False)])

        while queue:
            (x, y), cost, levered = queue.popleft()

            if (x, y) == end_point and levered:
                return cost

            for i in range(4):
                nx, ny = x + dx[i], y + dy[i]

                if is_valid(nx, ny) and (nx, ny, levered) not in visited:
                    if maps[nx][ny] == "L":
                        queue.append(((nx, ny), cost + 1, True))
                        visited.add((nx, ny, True))
                    else:
                        queue.append(((nx, ny), cost + 1, levered))
                        visited.add((nx, ny, levered))

        return -1

    return bfs()
