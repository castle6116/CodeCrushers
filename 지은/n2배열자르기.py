# 시간 초과
def solution(n, left, right):
    arr = [[] for i in range(n)]
    for col in range(n):
        for row in range(n):
            if row >= col:
                arr[row].append(row+1)
            else:
                arr[row].append(col+1)

    stack = []
    for i in arr:
        for k in i:
            stack.append(k)
    return stack[left:right+1]


# 최적화
def solution(n, left, right):
    stack = []
    for i in range(left, right+1):
        row = i // n
        col = i % n
        val = row+1 if row >= col else col+1
        stack.append(val)
    return stack


# 다른 사람의 풀이
def solution(n, left, right):
    answer = []
    for i in range(left, right+1):
        answer.append(max(i//n, i % n)+1)
    return answer
