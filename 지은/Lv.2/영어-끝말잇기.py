def solution(n, words):
    history = []

    for word in words:
        if word in history:
            a,b = divmod(len(history),n)
            return [b+1,a+1]
        elif len(history) >0 and word[0] != history[-1][-1]:
            a,b = divmod(len(history),n)
            return [b+1,a+1]
        else:
            history.append(word)
    return [0,0]


# 다른 사람의 풀이
def solution(n, words):
    for p in range(1, len(words)):
        if words[p][0] != words[p-1][-1] or words[p] in words[:p]: return [(p%n)+1, (p//n)+1]
    else:
        return [0,0]
