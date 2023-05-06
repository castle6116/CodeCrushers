def solution(s):
    res = 1
    if s[0] == ")" or s[-1] == "(":
        return False
    stack = []
    
    for i in s:
        stack.append(i)
        if len(stack)>1:
            if stack[-2] == "(" and stack[-1] == ")":
                stack.pop()
                stack.pop()
    return len(stack) == 0


# 다른 사람의 풀이
def solution2(s):
    pair = 0
    for x in s:
        if pair < 0: break
        if x == "(":
            pair += 1
        else:
            if x== ")":
                pair -= 1
    return pair == 0