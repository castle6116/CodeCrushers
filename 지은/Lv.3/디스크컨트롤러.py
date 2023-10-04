from collections import deque
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


def solution(jobs):
    tasks = deque(sorted([(x[1], x[0])
                  for x in jobs], key=lambda x: (x[1], x[0])))
    print(tasks)

    q = []
    heapq.heappush(q, tasks.popleft())
    clock, answer = 0, 0

    while len(q) > 0:
        amount, req_time = heapq.heappop(q)
        clock = max(clock + amount, req_time + amount)
        answer += clock - req_time

        while len(tasks) > 0 and tasks[0][1] <= clock:
            heapq.heappush(q, tasks.popleft())

        if len(tasks) > 0 and len(q) == 0:
            heapq.heappush(q, tasks.popleft())
    return answer // len(jobs)
