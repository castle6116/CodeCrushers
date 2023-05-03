def solution(skill, skill_trees):
    ans = 0        
    dict = {}
    for i,e in enumerate(skill):
        dict[e] = i
        
    for tree in skill_trees:
        res = []
        for i,e in enumerate(tree):
            if e in skill:
                res.append(dict[e])
                
        if not res:
            ans += 1
            continue
        
        for i in range(len(res)):
            if list(dict.values())[i] != res[i]:
                break
            if i == len(res) - 1:
                ans +=1
    return ans


# 다른 사람의 풀이1
def solution(skill, skill_trees):
    answer = 0

    for skills in skill_trees:
        skill_list = list(skill)

        for s in skills:
            if s in skill:
                if s != skill_list.pop(0):
                    break
        else:
            answer += 1

    return answer


# 다른 사람의 풀이2
def solution(skill,skill_tree):
    answer=0
    for i in skill_tree:
        skillist=''
        for z in i:
            if z in skill:
                skillist+=z
        if skillist==skill[0:len(skillist)]:
            answer+=1
    return answer
