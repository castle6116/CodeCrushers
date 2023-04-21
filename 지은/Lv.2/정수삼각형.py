# dp - tabulation
def solution(triangle):
    for l in range(1, len(triangle)):
        for i in range(l+1):
            if i == 0:
                triangle[l][0] += triangle[l-1][0]
            elif i == l:
                triangle[l][-1] += triangle[l-1][-1]
            else:
                triangle[l][i] += max(triangle[l-1][i-1], triangle[l-1][i])

    return max(triangle[-1])


# 다른 사람의 풀이1
def solution(triangle):
    height = len(triangle)
    while height > 1:
        for i in range(height - 1):
            triangle[height -
                     2][i] += max([triangle[height-1][i], triangle[height-1][i+1]])
        height -= 1

    answer = triangle[0][0]
    return answer


# 다른 사람의 풀이2 - memoization
def solution(triangle):
    memo = {}
    answer = f(triangle, 0, 0, memo)
    return answer


def f(triangle, i, j, memo):
    if i == len(triangle)-1:
        return triangle[i][j]

    if (i, j) in memo:
        return memo[(i, j)]

    a = f(triangle, i+1, j, memo)
    b = f(triangle, i+1, j+1, memo)
    x = triangle[i][j] + max(a, b)

    memo[(i, j)] = x

    return x


# 다른 사람의 풀이3
# 한 층식 제거(input1), 최대 이동거리 배열 계산(input2)
# 종료조건 : not triangle
# 모서리 조건 해결 : [0]+l, l+[0]
solution = lambda t, l = []: max(l) if not t else solution(
    t[1:], [max(x, y)+z for x, y, z in zip([0]+l, l+[0], t[0])])
