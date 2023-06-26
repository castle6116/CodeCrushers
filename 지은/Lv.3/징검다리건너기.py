# 시간초과 O(n^2)
from collections import deque


def solution(stones, k):
    skip_count, ans, flag = 0, 0, True

    while flag:
        skip_count = 0
        ans += 1
        for i, e in enumerate(stones):
            if e != 0:
                stones[i] -= 1
                skip_count = 0
            else:
                skip_count += 1

            if skip_count >= k:
                flag = False
                ans -= 1
                break
    return ans


# 이진탐색으로 최적화

def isAllPass(stones, k, mid):
    count = 0
    for stone in stones:
        if stone < mid:
            count += 1
            if count == k:
                return False
        else:
            count = 0
    return True


def solution(stones, k):
    left, right = 1, max(stones)

    while left <= right:
        mid = (left + right) // 2
        if isAllPass(stones, k, mid):
            left = mid + 1
        else:
            right = mid - 1

    return right
