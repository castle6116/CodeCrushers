def solution(board):
    graph = []
    start, end = None, None
    for i, e in enumerate(board):
        row = []
        for j, f in enumerate(e):
            if f == ".":
                row.append(0)
            elif f == "D":
                row.append(-1)
            elif f == "R":
                start = (i, j)
                row.append(0)
            elif f == "G":
                end = (i, j)
                row.append(0)
        graph.append(row)

    def can_go(x, y, direction):
        nx, ny = x + dx[direction], y + dy[direction]
        if 0 <= nx < len(graph) and 0 <= ny < len(graph[0]) and graph[nx][ny] != -1:
            return True
        return False

    visited = [[False for _ in range(len(graph[0]))]
               for _ in range(len(graph))]
    visited[start[0]][start[1]] = True
    min_travel = float('inf')
    dx = [1, 0, -1, 0]
    dy = [0, 1, 0, -1]

    if all([can_go(end[0], end[1], i) for i in range(4)]) == True:
        return -1

    def bfs(point, cnt):
        x, y = point
        for i in range(4):
            travel = 0
            nx, ny = x, y
            if not can_go(nx, ny, i):
                continue
            while can_go(nx, ny, i):
                nx, ny = nx+dx[i], ny+dy[i]
                travel += 1

            if (nx, ny) == end:
                nonlocal min_travel
                min_travel = min(min_travel, cnt + 1)
                return

            if not visited[nx][ny]:
                queue.append(((nx, ny), cnt+1))
                visited[nx][ny] = True

    queue = [(start, 0)]
    while queue:
        point, cnt = queue.pop(0)
        bfs(point, cnt)

    return min_travel if min_travel != float('inf') else -1


# 간결하게 수정
def solution(board):
    n, m = len(board), len(board[0])
    graph = [[0] * m for _ in range(n)]
    start, end = None, None

    for i in range(n):
        for j in range(m):
            if board[i][j] == "R":
                start = (i, j)
            elif board[i][j] == "G":
                end = (i, j)
            elif board[i][j] == "D":
                graph[i][j] = -1

    dx, dy = [1, 0, -1, 0], [0, 1, 0, -1]
    visited = [[False] * m for _ in range(n)]

    def move(x, y, d):
        while True:
            nx, ny = x + dx[d], y + dy[d]
            if 0 <= nx < n and 0 <= ny < m and graph[nx][ny] != -1:
                x, y = nx, ny
            else:
                return x, y

    queue = [(start, 0)]
    while queue:
        (x, y), count = queue.pop(0)
        if (x, y) == end:
            return count
        for d in range(4):
            nx, ny = move(x, y, d)
            if not visited[nx][ny]:
                visited[nx][ny] = True
                queue.append(((nx, ny), count + 1))

    return -1
