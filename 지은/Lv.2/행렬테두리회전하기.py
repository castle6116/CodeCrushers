def solution(rows, columns, queries):
    matrix = [[(i) * columns + (j + 1) for j in range(columns)] for i in range(rows)]
    result = []
    
    for query in queries:
        x1, y1, x2, y2 = [q - 1 for q in query]
        temp = matrix[x1][y1]
        min_value = temp

        for i in range(x1, x2):
            move_value = matrix[i + 1][y1]
            matrix[i][y1] = move_value
            min_value = min(min_value, move_value)

        for i in range(y1, y2):
            move_value = matrix[x2][i + 1]
            matrix[x2][i] = move_value
            min_value = min(min_value, move_value)

        for i in range(x2, x1, -1):
            move_value = matrix[i - 1][y2]
            matrix[i][y2] = move_value
            min_value = min(min_value, move_value)

        for i in range(y2, y1, -1):
            move_value = matrix[x1][i - 1]
            matrix[x1][i] = move_value
            min_value = min(min_value, move_value)

        matrix[x1][y1 + 1] = temp
        result.append(min_value)

    return result

# 다른 사람의 풀이 - deque 사용하여 값 저장 후 pop하여 다시 채워넣기
from collections import deque
def solution(rows, columns, queries):
    arr = [[i+columns*j for i in range(1,columns+1)] for j in range(rows)]
    answer, result = deque(), []
    for i in queries:
        a,b,c,d = i[0]-1,i[1]-1,i[2]-1,i[3]-1
        for x in range(d-b):
            answer.append(arr[a][b+x])
        for y in range(c-a):
            answer.append(arr[a+y][d])
        for z in range(d-b):
            answer.append(arr[c][d-z])
        for k in range(c-a):
            answer.append(arr[c-k][b])
        answer.rotate(1)
        result.append(min(answer))
        for x in range(d-b):
            arr[a][b+x] = answer[0]
            answer.popleft()
        for y in range(c-a):
            arr[a+y][d] = answer[0]
            answer.popleft()
        for z in range(d-b):
            arr[c][d-z] = answer[0]
            answer.popleft()
        for k in range(c-a):
            arr[c-k][b] = answer[0]
            answer.popleft()
    return result
