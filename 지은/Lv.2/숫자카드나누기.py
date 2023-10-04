# 77점
import math

def solution(arrayA, arrayB):
    def gcd(x, y):
        while y != 0:
            x, y = y, x % y
        return x

    def gcd_list(arr):
        res = arr[0]
        for num in arr[1:]:
            res = gcd(res, num)
        return res
    
    gcdA = gcd_list(arrayA)
    gcdB = gcd_list(arrayB)
    
    if all([num % gcdA == 0 for num in arrayA]) and all([num % gcdA != 0 for num in arrayB]):
        return gcdA
    
    if all([num % gcdB == 0 for num in arrayB]) and all([num % gcdB != 0 for num in arrayA]):
        return gcdB
    
    return 0


# 몰라서 다른 사람의 풀이 확인
from functools import reduce
from math import gcd


def solution(nums1, nums2):
    gcd1, gcd2 = reduce(gcd, nums1), reduce(gcd, nums2)

    answer = []
    if all(each % gcd2 for each in nums1):
        answer.append(gcd2)
    if all(each % gcd1 for each in nums2):
        answer.append(gcd1)
    return max(answer) if answer else 0

# 내것 수정 - 통과
import math

def solution(arrayA, arrayB):
    def gcd(x, y):
        while y != 0:
            x, y = y, x % y
        return x

    def gcd_list(arr):
        res = arr[0]
        for num in arr[1:]:
            res = gcd(res, num)
        return res
    
    gcdA = gcd_list(arrayA)
    gcdB = gcd_list(arrayB)
    
    ans = []
    if all([num % gcdA == 0 for num in arrayA]) and all([num % gcdA != 0 for num in arrayB]):
        ans.append(gcdA) 
    
    if all([num % gcdB == 0 for num in arrayB]) and all([num % gcdB != 0 for num in arrayA]):
        ans.append(gcdB) 
    
    return max(ans) if ans else 0