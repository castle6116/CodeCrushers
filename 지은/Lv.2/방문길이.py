def solution(dirs):
    visited = set()
    x, y = 0, 0

    move = {"U": (0, 1), "D": (0, -1), "R": (1, 0), "L": (-1, 0)}

    for dir in dirs:
        dx, dy = move[dir]
        nx, ny = x + dx, y + dy

        if -5 <= nx <= 5 and -5 <= ny <= 5:
            if ((x, y), (nx, ny)) not in visited:
                visited.add(((x, y), (nx, ny)))
                visited.add(((nx, ny), (x, y)))
            x, y = nx, ny

    return len(visited) / 2
