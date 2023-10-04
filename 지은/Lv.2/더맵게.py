
import heapq


def solution(scoville, K):
    heapq.heapify(scoville)
    count = 0
    if scoville[0] >= K:
        return count

    while scoville[0] < K:
        if len(scoville) == 1:
            return -1

        a = heapq.heappop(scoville)
        b = heapq.heappop(scoville)

        heapq.heappush(scoville, a + b*2)
        count += 1

    return count
