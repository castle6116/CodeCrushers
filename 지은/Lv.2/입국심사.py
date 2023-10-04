# heap으로 접근, 시간초과
import heapq

def solution(n, times):
    heap = [(time, time) for time in times]
    heapq.heapify(heap)
    
    end_time = 0
    for _ in range(n):
        end_time, time = heapq.heappop(heap)
        heapq.heappush(heap, (end_time + time, time))

    return end_time

# 이분탐색으로 풀어야 효율적이다
def solution(n, times):
    min_time = 1
    max_time = max(times) * n
    answer = max_time
    
    while min_time <= max_time:
        mid_time = (min_time + max_time) // 2
        
        total_people = sum(mid_time // time for time in times)
        
        if total_people < n:
            min_time = mid_time + 1
        else: 
            answer = mid_time
            max_time = mid_time - 1

    return answer
