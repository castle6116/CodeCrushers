import re
import collections


def solution(s):
    counter = collections.Counter(re.findall('\d+', s))
    arr = sorted(counter.items(), key=lambda x: x[1], reverse=True)
    return list(map(int, [k for k, v in arr]))


# 다른 사람의 풀이
def solution(s):
    new_s = [sss.replace('{', '').replace('}', '') for sss in s.split(',')]
    return [int(c[0]) for c in sorted(collections.Counter(new_s).items(), key=lambda x: x[1], reverse=True)]
