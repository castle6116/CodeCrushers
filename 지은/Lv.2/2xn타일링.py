# 시간 초과
import math
import itertools


def solution(n):
    start = n // 2
    counter = start
    res = 0
    while counter >= 0:
        arr = [2 for _ in range(counter)]
        arr += [1 for _ in range(n-2*counter)]

        odds = set(itertools.permutations(arr))
        res += len(odds)
        counter -= 1
    return res % 1000000007


# 갯수만 구하는 것으로 최적화 -> 시간초과


def solution(n):

    start = n // 2
    counter = start
    res = 0
    while counter >= 0:
        odds = math.comb(counter+n-2*counter, counter)
        res += odds
        counter -= 1
    return res % 1000000007


#  dp(점화식 세우기) -> 피보나치수
# 시간초과

def solution(n):
    memo = {0: 0, 1: 1, 2: 2}

    if n <= 2:
        return memo[n]
    else:
        for i in range(3, n+1):
            memo[i] = memo[i-2] + memo[i-1]

    return memo[n] % 1000000007

# 오버플로우를 막기위해 10000000007

# memoization


def solution(n):
    if n == 1:
        return 1
    if n == 2:
        return 2

    memo = [0] * (n + 1)
    memo[1] = 1
    memo[2] = 2

    for i in range(3, n + 1):
        memo[i] = memo[i - 1] % 1000000007 + memo[i - 2] % 1000000007

    return memo[n] % 1000000007

# 빠른 피보나치 풀이


def solution(n):
    a, b = 1, 1
    for _ in range(n):
        a, b = b, a+b
    return a % 1000000007
