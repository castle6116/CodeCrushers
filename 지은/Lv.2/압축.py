import string


def solution(msg):
    alpha = [i for i in string.ascii_uppercase]
    dict = {}
    for i in range(len(alpha)):
        dict[alpha[i]] = i+1

    res = []
    end_idx, idx, w = 26, 0, msg[0]

    while idx < len(msg):
        if w in dict:
            idx += 1
            if idx < len(msg):
                w += msg[idx]
            else:
                res.append(dict[w])
                break
        else:
            if len(w) > 1:
                res.append(dict[w[:-1]])
            dict[w] = end_idx + 1
            end_idx += 1
            w = msg[idx]

    return res


# 다른 사람의 풀이1
def solution(msg):
    alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    d = {k: v for (k, v) in zip(alphabet, list(range(1, 27)))}
    answer = []

    while True:
        if msg in d:
            answer.append(d[msg])
            break
        for i in range(1, len(msg)+1):
            if msg[0:i] not in d:
                answer.append(d[msg[0:i-1]])
                d[msg[0:i]] = len(d)+1
                msg = msg[i-1:]
                break

    return answer


# 다른 사람의 풀이2
def solution(msg):
    a = []
    msg += '_'
    s = list('_ABCDEFGHIJKLMNOPQRSTUVWXYZ')
    while len(msg) > 1:
        i = 0
        while msg[:-i] not in s:
            i += 1
        a += [s.index(msg[:-i])]
        s += [msg[:-i+1]]
        msg = msg[-i:]
    return a
