# 오답, 83점
from collections import deque

def solution(queue1, queue2):
    queue1, queue2 = deque(queue1), deque(queue2)
    sum1, sum2 = sum(queue1), sum(queue2)  
    ori1, ori2 = sum1, sum2
    count = 0
    if (sum1 + sum2) % 2 == 1:
        return -1
    
    while (sum1 != ori1 and sum2 != ori2) or count == 0:   
        if sum1 > sum2:
            out = queue1.popleft()
            queue2.append(out)
            sum1 -= out
            sum2 += out
        else:
            out = queue2.popleft()
            queue1.append(out)
            sum1 += out
            sum2 -= out

        count += 1
        
        if sum1 == sum2:
            return count

    return -1

