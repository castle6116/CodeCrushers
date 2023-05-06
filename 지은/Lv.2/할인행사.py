import collections
def solution(want, number, discount):
    res = 0
    for i in range(len(discount)):
        res += 1
        for k in range(len(want)):
            counter = collections.Counter(discount[i:i+10])
            if want[k] not in counter or counter[want[k]] < number[k]:
                res -= 1
                break
        
    return res
