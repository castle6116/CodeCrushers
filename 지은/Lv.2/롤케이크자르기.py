# 시간초과(O(N^2))
def solution(topping):
    cnt = 0
    for i in range(len(topping)):
        chulsoo = set(topping[:i])
        brother = set(topping[i:])
        if len(chulsoo) == len(brother):
            cnt += 1
    return cnt
        
# counter사용해서 최적화 (O(N))
import collections

def solution(topping):
    cnt = 0
    chulsoo = collections.Counter()
    brother = collections.Counter(topping)
    
    for i in range(len(topping)):
        chulsoo[topping[i]] += 1
        brother[topping[i]] -= 1
        if brother[topping[i]] == 0:
            del brother[topping[i]]
        if len(chulsoo) == len(brother):
            cnt += 1
    return cnt
