# reduce 쓰는법을 보고 가자
from collections import Counter
from functools import reduce


def solution(clothes):
    cnt = Counter([kind for name, kind in clothes])
    answer = reduce(lambda x, y: x*(y+1), cnt.values(), 1) - 1
    return answer
