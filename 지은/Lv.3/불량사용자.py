from itertools import product

def solution(user_id, banned_id):
    ban_dict = [[] for _ in range(len(banned_id))]
        
    for i, ban in enumerate(banned_id):
        for user in user_id:
            if len(user) != len(ban): 
                continue
            for u, b in zip(user, ban):
                if b != '*' and b != u: 
                    break
            else:
                ban_dict[i].append(user)
    answer = set()

    for prod in product(*ban_dict):
        temp = set(prod)
        if len(temp) == len(banned_id):
            answer.add(tuple(sorted(temp)))

    return len(answer)


# 다른 사람의 풀이 - DFS
def combi(temp, number, calculate):
    global result
    if len(temp) == len(calculate):
        temp = set(temp)
        if temp not in result:
            result.append(temp)
        return
    else:
        for j in range(len(calculate[number])):
            if calculate[number][j] not in temp:
                temp.append(calculate[number][j])
                combi(temp, number+1, calculate)
                # backtrack
                temp.pop() 
result = []

def solution(user_id, banned_id):
    global result
    calculate = []
    for ban in banned_id:
        possible=[]
        for user in user_id:
            if len(ban) != len(user):
                continue
            else:
                count = 0
                for i in range(len(ban)):
                    if user[i] == ban[i]:
                        count+=1
                if count == len(ban)-ban.count('*'):
                    possible.append(user)
        calculate.append(possible)

    combi([], 0, calculate)
    return len(result)


# 다른 사람의 풀이2
# To represent sets of sets, the inner sets must be frozenset objects. If iterable is not specified, a new empty set is returned.

import re
import itertools

def solution(user_id, banned_id):

    banned_id = ["'" + _.replace('*', '\w') + "'"  for _ in banned_id]

    possible_list = [re.findall(_, str(user_id)) for _ in banned_id]    

    possible_list = list(itertools.product(*possible_list))

    possible_list = [frozenset(p) for p in possible_list if len(set(p)) == len(banned_id)]
    possible_list = set(possible_list)


    return len(possible_list)