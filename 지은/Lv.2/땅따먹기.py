# dp
def solution(land):
    for i in range(1, len(land)):
        for j in range(4):
            max_value = 0
            for k in range(4):
                if j != k:
                    max_value = max(max_value, land[i-1][k])
            land[i][j] += max_value

    return max(land[-1])


# 다른 사람의 풀이
def solution(land):

    for i in range(1, len(land)):
        for j in range(len(land[0])):
            land[i][j] = max(land[i - 1][: j] + land[i - 1]
                             [j + 1:]) + land[i][j]

    return max(land[-1])
