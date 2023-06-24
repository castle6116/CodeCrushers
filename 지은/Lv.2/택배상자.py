def solution(order):
    stack = []
    total = len(order)
    convey = 1
    left = 0

    while convey <= total:
        stack.append(convey)
        while stack[-1] == order[left]:
            left += 1
            stack.pop()
            if len(stack) == 0:
                break
        convey += 1

    return left


# 다른 사람의 풀이1
def solution(order):
    answer = 0
    n = len(order)
    stack = []

    o = 0
    for i in range(1, n + 1):
        if i == order[o]:
            answer += 1
            o += 1
        elif i < order[o]:
            stack.append(i)

        while stack and stack[-1] == order[o]:
            stack.pop()
            answer += 1
            o += 1

    return answer

# 다른 사람의 풀이2


def solution(order):
    answer = 0
    order.reverse()
    s = []
    for i in range(len(order)):
        s.append(i+1)
        while s and order[-1] == s[-1]:
            answer += 1
            s.pop()
            order.pop()

    return answer
