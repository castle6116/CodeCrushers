def solution(n):
    count = 0
    
    def continuous_sum(start):
        res = 0
        while res< n:
            res += start
            start += 1
        return res == n
    
    for i in range(1, n+1):
        if continuous_sum(i):
            count +=1
    return count
            

# 다른 사람의 풀이
def expressions(num):
    answer = 0
    for i in range(1, num+1):
        summ = 0
        while (summ < num):
            summ += i
            i += 1
        if summ == num:
            answer += 1
    return answer