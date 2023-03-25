"""
https://school.programmers.co.kr/learn/courses/30/lessons/148653

그리디 알고리즘: 각 단계에서 가장 최선을 선택을 해나가는 알고리즘
"""

def solution(storey):
    stone = 0

    while storey != 0:
        last_n = storey % 10

        if last_n < 5:
            candi = last_n
            storey -= last_n
        elif last_n > 5:
            candi = 10 - last_n
            storey += candi
        else: 
            candi = 5
            over_tenth = storey // 10
            if over_tenth % 10 >= 5:
                storey += candi
            else:
                storey -= candi

        storey = storey // 10
        stone += candi

    return stone



# test1 (result = 6)
print(solution(16))

# test2 (result = 16)
print(solution(2554))
