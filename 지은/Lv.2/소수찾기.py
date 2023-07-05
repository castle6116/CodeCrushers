import itertools
def solution(numbers):
    memo = set()
    def is_prime(n):
        if n == 1 or n==0 or n in memo:
            return False
        for k in range(2, 1+ int(n**1/2)):
            if n % k == 0:
                return False
        memo.add(n)
        return True
    
    count = 0
    for i in range(1, len(numbers)+1):
        arr = set(itertools.permutations(numbers,i))
        for t in arr:
            if is_prime(int("".join(t))):
                count += 1
    return count


# 다른 사람의 풀이1 - dictionary merge and update operations
# 배수들을 제거하는 방식
from itertools import permutations

def solution(n):
    a = set()
    for i in range(len(n)):
        a |= set(map(int, map("".join, permutations(list(n), i + 1))))
    a -= set(range(0, 2))
    for i in range(2, int(max(a) ** 0.5) + 1):
        a -= set(range(i * 2, max(a) + 1, i))
    return len(a)


# 다른 사람의 풀이2 - permutation을 재귀로 구현
import math
def check_prime(n):
    if n < 2:
        return False
    for i in range(2, int(math.sqrt(n)) + 1):
        if (n % i) == 0:
            return False
    return True

number_set = set()
def permutation(base, array):
    if base:
        number_set.add(int(base))

    for i, s in enumerate(array):
        permutation(base + s, array[:i] + array[i+1:])

def solution(numbers):
    permutation("", list(numbers))
    return len(list(filter(check_prime, number_set)))
