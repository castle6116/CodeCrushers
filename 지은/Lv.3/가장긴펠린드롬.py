# 테스트 하나가 통과하지 않는다
def solution(s):
    if len(s) == 1:
        return 1
    if s == s[::-1]:
        return len(s)
    for window_size in range(len(s), 0, -1):
        for i in range(len(s)-window_size):
            if s[i:i+window_size+1] == s[i:i+window_size+1][::-1]:
                return window_size+1


# 내 블로그 리트코드 풀이 넣어봄 -> 통과
def solution(s):
    def expand(left, right):
        while left >= 0 and right < len(s) and s[left] == s[right]:
            left -= 1
            right += 1
        return s[left + 1: right]

    if len(s) < 2 or s == s[::-1]:
        return len(s)

    result = ""
    for i in range(len(s)-1):
        result = max(result, expand(i, i+1), expand(i, i+2), key=len)
    return len(result)
