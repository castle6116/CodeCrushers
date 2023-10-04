# 답지 공부
#  left = the count of leftward moves needed to return to the starting position from i.
# right = the number of rightward moves to reach the end of the string from tmp.
# left+right+min(left, right) :  The total cursor moves, if we decide to reverse from i and then move forward
import math

def solution(name):
    answer = 0
    for i in range(len(name)):
        x = ord(name[i])-ord("A")
        y = ord("Z")-ord(name[i])+1
        answer += (x if x < y else y)

    tmp = 0
    shift = len(name)-1
    for i in range(len(name)):
        if name[i] == "A":
            tmp = i
            while(tmp < len(name) and name[tmp] == "A"):
                tmp += 1
            left = (0 if i == 0 else i-1)
            right = len(name)-tmp
            shift = min(shift, left+right+min(left, right))
    answer += shift
    return answer
