import heapq
def solution(operations):
    heap = []
    for i in operations:
        a, b = i.split()
        b = int(b)
        if a == "I":
            heapq.heappush(heap, b)
        elif a == "D" and b < 0:
            if heap:
                heapq.heappop(heap)
        elif a == "D" and b > 0:
            if heap: 
                rev_heap = [-i for i in heap]
                heapq.heapify(rev_heap)
                heapq.heappop(rev_heap)
                heap = [-i for i in rev_heap]
                heapq.heapify(heap)

    return [0, 0] if not heap else [max(heap), min(heap)]


# 다른 사람의 풀이
def solution(operations):
    q = []

    for op in operations:
        if op == "D 1":
            if q: q.pop()
        elif op == "D -1":
            if q: heapq.heappop(q)
        else:
            num = int(op.split(" ")[-1])
            heapq.heappush(q, num)
            q.sort()

    if q:
        return [q[-1], q[0]]
    else:
        return [0, 0]
