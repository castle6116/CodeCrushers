def solution(m, n, puddles):
    grid = [[0] * (m + 1) for _ in range(n + 1)]
    grid[1][1] = 1

    for puddle in puddles:
        x, y = puddle
        grid[y][x] = -1

    for r in range(1, n + 1):
        for c in range(1, m + 1):
            if r == 1 and c == 1:
                continue
            if grid[r][c] == -1:
                grid[r][c] = 0
            else:
                grid[r][c] = (grid[r - 1][c] + grid[r][c - 1]) 
    return grid[n][m] % 1000000007