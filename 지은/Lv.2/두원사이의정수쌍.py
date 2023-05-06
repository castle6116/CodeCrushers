# 시간 초과
def solution(r1, r2):
    def dots(r):
        plain, circle = 0, 0
        y = 0
        while y != r:
            for x in range(1,r+1):
                if x**2 + y**2 < r**2:
                    plain += 1
                elif x**2 + y**2 == r**2:
                    circle += 1
            y += 1
        return plain, circle
    
    r1_plain, r1_circle = dots(r1)
    r2_plain, r2_circle = dots(r2)
    
    return (r2_plain - r1_plain + r2_circle ) * 4


# x,y를 모두 구하지 않고 y를 통해 x의 갯수를 구하도록 바꿨다.
def solution(r1, r2):
    def dots(r):
        plain, circle = 0, 0
        for y in range(1, r+1):
            x = int((r**2 - y**2)**0.5)
            plain += x + 1
            if x**2 + y**2 == r**2:
                circle += 1
                plain -= 1
        return plain, circle

    r1_plain, r1_circle = dots(r1)
    r2_plain, r2_circle = dots(r2)
    
    return (r2_plain - r1_plain + r2_circle ) * 4


# 다른 사람의 풀이 - 이해 안감
from math import sqrt

def solution(r1, r2):
    quar = 0
    for i in range(0, r1):
        quar += int(sqrt(r2**2 - i**2)) - int(sqrt(r1**2 - i**2 - 1))
    for i in range(r1, r2):
        quar += int(sqrt(r2**2 - i**2))
    return quar * 4