# 11,28 시간초과
from collections import deque


def solution(queue1, queue2):
    queue1, queue2 = deque(queue1), deque(queue2)
    sum1, sum2 = sum(queue1), sum(queue2)
    count = 0

    if (sum1 + sum2) % 2 == 1:
        return -1

    if sum1 == sum2:
        return 0

    while sum1 != sum2:
        if not queue1 or not queue2:
            return -1
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

    return count


# limit을 길이 4배 -1 로 두니 통과
# 3배로 둬도 통과한다. 정확한 이유는 모르겠다.


def solution(queue1, queue2):
    queue1, queue2 = deque(queue1), deque(queue2)
    sum1, sum2 = sum(queue1), sum(queue2)
    count = 0
    limit = len(queue1) * 3
    if (sum1 + sum2) % 2 == 1:
        return -1

    if sum1 == sum2:
        return 0

    while sum1 != sum2:
        if count >= limit:
            return -1
        if not queue1 or not queue2:
            return -1
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

    return count
