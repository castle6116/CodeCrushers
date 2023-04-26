# 런타임 오류가 나는 코드
# 이유 : n이 매우 큰 경우 n번째 피보나치 수는 파이썬이 표현할 수 있는 자료형의 범위를 넘어가서 오버플로우 생김
# 그리고 파이썬은 재귀함수가 실행될 때마다 새로운 stack frame을 만들어 메모리를 소모한다. 재귀함수 호출이 너무 많을때 "RecursionError: maximum recursion depth exceeded" 에러가 일어난다.

def solution(n):
    
    def fibo(num):
        if num == 1:
            return 1
        if num == 0:
            return 0
        return (fibo(num-1) + fibo(num-2))%1234567
    
    return fibo(n)

# 정답 :
def solution(n):
    if n == 0:
        return 0
    if n == 1:
        return 1

    a, b = 0, 1
    for _ in range(2, n + 1):
        a, b = b, (a + b) % 1234567

    return b