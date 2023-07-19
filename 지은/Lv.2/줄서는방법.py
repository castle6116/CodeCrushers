# 시간초과
import itertools

def solution(n, k):
    arr = list(itertools.permutations([i for i in range(1,n+1)]))
    return (list(arr[k-1]))

# 갯수
def solution(n, k):
    def factorial(num):
        if num == 0:
            return 1
        return num * factorial(num - 1)

    numbers = list(range(1, n+1))
    k -= 1
    ans = []

    while n > 0:
        n -= 1
        index, k = divmod(k, factorial(n))
        
        ans.append(numbers.pop(index))
  
    return ans
