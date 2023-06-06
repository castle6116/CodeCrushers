# 숫자들이 가까이 있을수록 곱한 결과가 크다
def solution(n, s):
    if n > s:
        return [-1]

    base = s // n
    remainder = s % n
    result = [base] * n
    for i in range(remainder):
        result[i] += 1

    return sorted(result)
