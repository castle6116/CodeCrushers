import collections


def solution(elements):
    double = elements*2
    window = 1
    res = set()
    while window != len(elements)+1:
        for start in range(len(elements)):
            res.add(sum(double[start:][:window]))
        window += 1
    return len(res)


# 다른 사람의 풀이
def solution(elements):
    l = len(elements)
    res = set()

    for i in range(l):
        total = elements[i]
        res.add(total)
        for j in range(i+1, i+l):
            total += elements[j % l]
            res.add(total)
    return len(res)
