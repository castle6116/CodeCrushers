def solution(n):
    triangle = [[0]*i for i in range(1, n+1)] 
    count = 1
    x, y = -1, 0
    
    for i in range(n):
        for j in range(i, n): 
            # down
            if i%3 == 0:
                x += 1
            # right
            elif i%3 == 1:
                y += 1
            #upstream
            else:
                x -= 1
                y -= 1
            triangle[x][y] = count
            count += 1

    res = []
    for row in triangle:
        for num in row:
            res.append(num)
    return res


# 다른 사람의 풀이1 - itertools chain 쓰는법 보기
from itertools import chain
def solution(n):
    [row, col, cnt] = [-1, 0, 1]
    board = [[None] * i for i in range(1, n+1)]
    for i in range(n):
        for _ in range(n-i):
            if i % 3 == 0:
                row += 1
            elif i % 3 == 1:
                col += 1
            else:
                row -= 1
                col -= 1
            board[row][col] = cnt
            cnt += 1
    return list(chain(*board))
