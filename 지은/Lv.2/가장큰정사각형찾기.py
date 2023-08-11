# https://www.youtube.com/watch?v=EqmVX56s6MQ&t=4s
def solution(board):
    row = len(board)
    col = len(board[0])

    max_side = 0

    for i in range(1, row):
        for j in range(1, col):
            if board[i][j] == 1:
                board[i][j] = min(board[i-1][j-1], board[i-1][j], board[i][j-1]) + 1
                max_side = max(max_side, board[i][j])

    if max_side == 0:
        max_side = max(map(max, board))

    return max_side * max_side  
