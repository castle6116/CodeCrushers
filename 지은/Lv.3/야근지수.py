# 시간 초과
import heapq


def solution(n, works):
    while n:
        works.sort()
        if works[-1] > 0:
            works[-1] = works[-1] - 1
            n -= 1
        elif works[-1] == 0:
            break

    return sum([i**2 for i in works])


# heapq 자료구조 사용
def solution(n, works):
    max_heap = [-w for w in works]
    heapq.heapify(max_heap)

    while n:
        max_work = heapq.heappop(max_heap)
        if max_work == 0:
            break
        heapq.heappush(max_heap, max_work + 1)
        n -= 1

    return sum([w ** 2 for w in max_heap])
