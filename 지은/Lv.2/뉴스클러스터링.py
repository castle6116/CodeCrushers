from collections import Counter


def solution(str1, str2):
    s1 = [str1[i:i+2].lower()
          for i in range(len(str1)-1) if str1[i:i+2].isalpha()]
    s2 = [str2[i:i+2].lower()
          for i in range(len(str2)-1) if str2[i:i+2].isalpha()]

    if not s1 and not s2:
        return 65536

    c1 = Counter(s1)
    c2 = Counter(s2)
    return int((sum((c1 & c2).values())) /
               (sum((c1 | c2).values())) * 65536)


# 다른 사람의 풀이


def solution(str1, str2):
    str1 = [str1[i:i+2].lower() for i in range(0, len(str1)-1)
            if not re.findall('[^a-zA-Z]+', str1[i:i+2])]
    str2 = [str2[i:i+2].lower() for i in range(0, len(str2)-1)
            if not re.findall('[^a-zA-Z]+', str2[i:i+2])]

    inter = set(str1) & set(str2)
    union = set(str1) | set(str2)
    if len(union) == 0:
        return 65536

    inter_sum = sum([min(str1.count(l), str2.count(l)) for l in inter])
    union_sum = sum([max(str1.count(l), str2.count(l)) for l in union])

    return int((inter_sum/union_sum)*65536)
