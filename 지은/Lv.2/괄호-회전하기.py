import collections


def solution(s):
    ans = 0
    dict = {")": "(", "}": "{", "]": "["}
    queue = collections.deque([i for i in s])
    queue.rotate(1)
    for i in range(len(s)):
        queue.rotate(-1)
        stack = []
        for k in queue:
            if stack and k in dict:
                if dict[k] == stack[-1]:
                    stack.pop()
            else:
                stack.append(k)
                continue
        if len(stack) == 0:
            ans += 1
    return ans


# 다른 사람의 풀이 1
def is_valid(s):
    stack = []
    for ch in s:
        if not stack:
            stack.append(ch)
        elif stack[-1] == '(':
            if ch == ')':
                stack.pop()
            else:
                stack.append(ch)
        elif stack[-1] == '{':
            if ch == '}':
                stack.pop()
            else:
                stack.append(ch)
        elif stack[-1] == '[':
            if ch == ']':
                stack.pop()
            else:
                stack.append(ch)

    return False if stack else True


def solution(s):
    answer = 0
    for i in range(len(s)):
        answer += is_valid(s[i:] + s[:i])
    return answer


# 다른 사람의 풀이 2
from collections import deque

def check(s):
    while True:
        if "()" in s: s=s.replace("()","")
        elif "{}" in s: s=s.replace("{}","")
        elif "[]" in s: s=s.replace("[]","")
        else: return False if s else True       

def solution(s):
    ans = 0
    que = deque(s)

    for i in range(len(s)):
        if check(''.join(que)): ans+=1
        que.rotate(-1)
    return ans
