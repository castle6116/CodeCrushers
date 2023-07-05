# 시간초과
import itertools


def solution(number, k):
    odds = list(itertools.combinations(number, len(number)-k))
    cand = -1
    for odd in odds:
        cand = max(cand, (int("".join(odd))))
    return str(cand)


# Greedy, Stack
def solution(number, k):
    stack = []

    for num in number:
        while stack and k > 0 and stack[-1] < num:
            stack.pop()
            k -= 1
        stack.append(num)

    while k > 0:
        stack.pop()
        k -= 1

    return ''.join(stack)
