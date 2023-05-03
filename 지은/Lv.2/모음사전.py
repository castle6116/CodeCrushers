import itertools
def solution(word):
    res = []
    for i in range(1,6):
        arr = list(itertools.product("AEIOU", repeat = i))
        res += arr
    res.sort()
    word_arr = tuple([i for i in word])
    
    return res.index(word_arr) + 1
    
    
# 다른 사람의 풀이1 - 등비수열의 합
def solution(word):
    answer = 0
    for i, n in enumerate(word):
        answer += (5 ** (5 - i) - 1) / (5 - 1) * "AEIOU".index(n) + 1
    return answer

# 다른 사람의 풀이2
def solution(word):
    dict = {'A' : 1, 'E' : 2, 'I' : 3, 'O': 4, 'U' : 5}
    n = len(word)
    answer = n
    for i in range(n):
        temp = 0
        for j in range(4 - i, -1, -1):
            temp += 5 ** j
        answer += temp * (dict[word[i]] - 1)
    return answer