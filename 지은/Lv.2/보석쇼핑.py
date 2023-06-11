# 시간초과
def solution(gems):
    types = list(set(gems))
    left,right = 0, len(gems)-1
    
    while left <= right:
        while len(set(gems[left:right+1])) < len(types):
            left += 1
        while len(set(gems[left:right+1])) <len(types):
            right -=1
    return [left+1, right+1]


# 시간초과 O(n^2)
def solution(gems):
    type_len = len(set(gems))
    
    res = []
    def check_type(arr):
        if type_len == len(set(arr)):
            return True
        return False
    
    left = 0
    right =  type_len + left -1
    while left <= right and right <= len(gems)-1:
        arr = gems[left:right +1]
        if not check_type(arr):
            right += 1
        else:
            res.append([left+1,right+1,right-left+1])
            left += 1
            right = type_len + left -1
    
    res.sort(key= lambda x: x[2])
    
    return ([res[0][0], res[0][1]])
            
    
# O(n)
def solution(gems):
    type_len = len(set(gems))
    dic = {gems[0]:1}
    answer = [0, len(gems) - 1]
    left, right = 0, 0
    
    while right < len(gems) and left <= right:
        if len(dic) == type_len:
            if right - left < answer[1] - answer[0]:
                answer = [left, right]
                
            if dic[gems[left]] == 1:
                del dic[gems[left]]
            else:
                dic[gems[left]] -= 1 
            left += 1 
            
        else:
            right += 1 
            if right == len(gems): 
                break
            if gems[right] in dic: 
                dic[gems[right]] += 1
            else:
                dic[gems[right]] = 1
    
    return [answer[0] + 1, answer[1] + 1]
