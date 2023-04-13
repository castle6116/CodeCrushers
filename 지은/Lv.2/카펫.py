def solution(brown, yellow):
    brown -= 4
    brown //= 2

    for i in range(1, brown + 1):
        a, b = i, brown - i
        if a * b == yellow:
            return [max(a, b) + 2, min(a, b) + 2]
        

# 다른 풀이
def solution(brown, yellow):
    for h in range(1, int(yellow**0.5) + 1):
        if yellow % h == 0:
            w = yellow // h

            if 2 * (w + h) + 4 == brown:
                return [w + 2, h + 2]