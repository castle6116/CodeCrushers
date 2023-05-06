# 시간 초과
import collections


def solution(numbers):
    res = []

    for i, e in enumerate(numbers):
        found = False
        for n in numbers[i+1:]:
            if n > e:
                res.append(n)
                found = True
                break
        if not found:
            res.append(-1)

    return res


# 시간 초과
def solution(numbers):
    res = []
    arr = collections.deque(numbers[:])

    for e in numbers:
        arr.popleft()
        if len(arr) == 0:
            res.append(-1)
            break
        for j, n in enumerate(arr):
            if n > e:
                res.append(n)
                break
            if j + 1 == len(arr):
                res.append(-1)
    return res


# Monotonic stack : O(n)
# stack에 인덱스를 저장하기 때문에 루프를 한번만 돌아도 된다.
def solution(numbers):
    res = [-1] * len(numbers)
    stack = []

    for i, e in enumerate(numbers):
        while stack and numbers[stack[-1]] < e:
            res[stack.pop()] = e
        stack.append(i)

    return res
