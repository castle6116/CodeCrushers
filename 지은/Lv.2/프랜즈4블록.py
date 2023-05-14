# 파이썬 알고리즘 인터뷰 p702
def solution(m, n, board):
    board = [list(x) for x in board]

    matched = True
    while matched:
        matched = []
        for i in range(m-1):
            for j in range(n-1):
                if board[i][j] == board[i][j+1] == board[i+1][j+1] == board[i+1][j] != "#":
                    matched.append([i, j])

        for i, j in matched:
            board[i][j] = board[i][j+1] = board[i+1][j+1] = board[i+1][j] = "#"

        for _ in range(m):
            for i in range(m-1):
                for j in range(n):
                    if board[i+1][j] == "#":
                        board[i+1][j], board[i][j] = board[i][j], "#"

    return sum(x.count("#") for x in board)
