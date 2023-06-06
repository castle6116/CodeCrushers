import heapq

def solution(jobs):
    counter, last, answer = 0, -1, 0
    heap = []
    jobs.sort()
    time = jobs[0][0]
    
    while counter < len(jobs):
        for i, t in jobs:
            if last < i <= time:
                heapq.heappush(heap, (t, i))    
    
        if len(heap) > 0:
            last = time
            takes, req = heapq.heappop(heap)
            counter += 1

            time += takes
            answer += (time - req)
        else:
            time += 1
            
    return int(answer / len(jobs))



# 다른 사람의 풀이1 - max를 이용해서 프로세스 공백 시간 건너뜀
import heapq
from collections import deque

def solution(jobs):
    tasks = deque(sorted([(x[1], x[0]) for x in jobs], key=lambda x: (x[1], x[0])))
    q = []
    heapq.heappush(q, tasks.popleft())
    time, answer = 0, 0
    while len(q) > 0:
        dur, arr = heapq.heappop(q)
        time = max(time + dur, arr + dur)
        answer += time - arr
        while len(tasks) > 0 and tasks[0][1] <= time:
            heapq.heappush(q, tasks.popleft())
        if len(tasks) > 0 and len(q) == 0:
            heapq.heappush(q, tasks.popleft())
    return answer // len(jobs)