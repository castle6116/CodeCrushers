from collections import deque

def bfs(start, place):
    directions = [(1, 0), (-1, 0), (0, 1), (0, -1)]
    queue = deque([(start, 0)]) 
    visited = set([start])

    while queue:
        (x, y), dist = queue.popleft()

        if dist > 2:
            continue

        for dx, dy in directions:
            nx, ny = x + dx, y + dy

            if 0 <= nx < 5 and 0 <= ny < 5 and (nx, ny) not in visited:
                if place[nx][ny] == 'P' and dist < 2:
                    return False
                if place[nx][ny] != 'X' and dist < 2:
                    queue.append(((nx, ny), dist + 1))
                    visited.add((nx, ny))
                    
    return True

def solution(places):
    answer = []

    for place in places:
        flag = True
        for i in range(5):
            for j in range(5):
                if place[i][j] == 'P':
                    if not bfs((i, j), place):
                        flag = False
                        break
            if not flag:
                break
        answer.append(1 if flag else 0)

    return answer

# 다른 사람의 풀이 1
def check(place):
    for irow, row in enumerate(place):
        for icol, cell in enumerate(row):
            if cell != 'P':
                continue
            if irow != 4 and place[irow + 1][icol] == 'P':
                return 0
            if icol != 4 and place[irow][icol + 1] == 'P':
                return 0
            if irow < 3 and place[irow + 2][icol] == 'P' and place[irow + 1][icol] != 'X':
                return 0
            if icol < 3 and place[irow][icol + 2] == 'P' and place[irow][icol + 1] != 'X':
                return 0
            if irow != 4 and icol != 4 and place[irow + 1][icol + 1] == 'P' and (place[irow + 1][icol] != 'X' or place[irow][icol + 1] != 'X'):
                return 0
            if irow != 4 and icol != 0 and place[irow + 1][icol - 1] == 'P' and (place[irow + 1][icol] != 'X' or place[irow][icol - 1] != 'X'):
                return 0
    return 1

def solution(places):
    return [check(place) for place in places]

