"""
https://school.programmers.co.kr/learn/courses/30/lessons/12951
"""

def solution(s):
    res =""
    prev = ""
    s= s.lower()
    for i in s:
        if prev=="" or prev==" " and i.isalpha():
            res += i.upper()
        else:
            res+=i
        prev=i
        
    return res


# 다른 사람의 풀이 - capitalize()
def solution2(s):
    answer = ''
    for i in s.lower().split(' '):
        if answer == '':
            answer += i.capitalize()
        else:
            answer += ' '+i.capitalize()
    return answer

