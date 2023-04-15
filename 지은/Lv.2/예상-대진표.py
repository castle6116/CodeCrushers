import math
def solution(n,a,b):
    count = 0
    while a != b:
        a=math.ceil(a/2)
        b=math.ceil(b/2)
        count +=1
    return count
    

# 다른 사람의 풀이 - bit wise operator
# 잘 이해가 안간다
def solution(n,a,b):
    return ((a-1)^(b-1)).bit_length()
