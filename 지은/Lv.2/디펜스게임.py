from heapq import heappop, heappush


def solution(n, k, enemy):
    answer, killed = 0, 0
    heap = []

    for e in enemy:
        heappush(heap, -e)
        killed += e
        if killed > n:
            if k == 0:
                break
            killed += heappop(heap)
            k -= 1
        answer += 1
    return answer
