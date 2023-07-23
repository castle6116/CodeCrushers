from collections import Counter


def is_valanced(k):
    counter = Counter(k)
    if len(counter) == 2 and counter["("] == counter[")"]:
        return True
    return False


def is_right(k):
    k = [i for i in k]
    left = []

    while k:
        if k.pop(0) == "(":
            left.append("(")
        else:
            if len(left) > 0:
                left.pop()
                continue
            return False

    if not left:
        return True
    else:
        return False


def separate(k):
    for i in range(1, len(k), 2):
        if is_valanced(k[:i+1]):
            return [k[:i+1], k[i+1:]]
    return [k, ""]


def flip(k):
    res3 = []
    for i in k[1:-1]:
        if i == "(":
            res3.append(")")
        else:
            res3.append("(")
    return "".join(res3)


def solution(p):
    if p == "":
        return ""

    def loop(m):
        if is_right(m):
            return m

        u, v = separate(m)

        if is_right(u):
            return u + loop(v)
        else:
            return "(" + loop(v) + ")" + flip(u)

    return loop(p)


# 다른 사람의 풀이 1
def solution(p):
    if p == '':
        return p
    r = True
    c = 0
    for i in range(len(p)):
        if p[i] == '(':
            c -= 1
        else:
            c += 1
        if c > 0:
            r = False
        if c == 0:
            if r:
                return p[:i+1] + solution(p[i+1:])
            else:
                return '(' + solution(p[i+1:]) + ')' + ''.join(list(map(lambda x: '(' if x == ')' else ')', p[1:i])))

# 풀이 최적화


def is_right(k):
    balance = 0
    for char in k:
        if char == "(":
            balance += 1
        else:
            balance -= 1
        if balance < 0:
            return False
    return balance == 0


def separate(k):
    balance = 0
    for i, char in enumerate(k):
        if char == "(":
            balance += 1
        else:
            balance -= 1
        if balance == 0:
            return [k[:i+1], k[i+1:]]
    return [k, ""]


def flip(k):
    return "".join(")" if i == "(" else "(" for i in k[1:-1])


def solution(p):
    if p == "":
        return ""

    def loop(m):
        if is_right(m):
            return m

        u, v = separate(m)

        if is_right(u):
            return u + loop(v)
        else:
            return "(" + loop(v) + ")" + flip(u)

    return loop(p)
