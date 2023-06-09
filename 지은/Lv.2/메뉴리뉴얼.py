from collections import defaultdict
from itertools import combinations
import re
def solution(orders, course):
    
    orders = [sorted(i) for i in orders]

    comb_dict = defaultdict(int)
    for order in orders:
        for l in range(2, len(order)+1):
            combs = (list(combinations(order, l)))
            for comb in combs:
                comb_dict[comb] += 1
    
    order_dict = defaultdict(list)
    for k,v in zip(comb_dict.keys(), comb_dict.values()):
        if v >= 2:
            order_dict[len(k)].append([v,k])
    
    ans = []
    numbered_dict = defaultdict(list)
    for c in course:
        combs = sorted(order_dict[c], key=lambda x:x[0], reverse=True)

        for comb in combs:
            letter = re.findall(r'\w+', str(comb[1]))
            letter = "".join(letter)
            comb[1] = letter
            numbered_dict[str(len(comb[1]))].append([comb[0],letter])
    
    for c in course:
        if numbered_dict[str(c)]:
            c_max = numbered_dict[str(c)][0][0]
        else: break
        for s in numbered_dict[str(c)]:
            if s[0] == c_max:
                ans.append(s[1])
        

    return sorted(ans)


# 다른 사람의 풀이 - Counter를 사용하자, combinations할 때 course_size만큼만 구하자
import collections
import itertools

def solution(orders, course):
    result = []

    for course_size in course:
        order_combinations = []
        for order in orders:
            order_combinations += itertools.combinations(sorted(order), course_size)

        most_ordered = collections.Counter(order_combinations).most_common()
        result += [ k for k, v in most_ordered if v > 1 and v == most_ordered[0][1] ]

    return [ ''.join(v) for v in sorted(result) ]