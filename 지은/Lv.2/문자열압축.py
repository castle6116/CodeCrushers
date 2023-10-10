def compress_string(s, step):
    compressed = ""
    prev = s[0:step]
    count = 1

    for j in range(step, len(s), step):
        if s[j:j + step] == prev:
            count += 1
        else:
            compressed += str(count) + prev if count > 1 else prev
            prev = s[j:j + step]
            count = 1

    compressed += str(count) + prev if count > 1 else prev
    return len(compressed)


def solution(s):
    if len(s) == 1:
        return 1

    result = len(s)

    for step in range(1, len(s) // 2 + 1):
        result = min(result, compress_string(s, step))

    return result


# 다른 사람의 풀이
def solution(s):
    min_len = len(s)
    for i in range(1, len(s) // 2 + 1):
        new_s = ''
        cnt = 1
        for j in range(0, len(s), i):
            if s[j:j+i] == s[j+i:j+2*i]:
                cnt += 1
            else:
                if (cnt != 1):
                    new_s += str(cnt)
                new_s += s[j:j+i]
                cnt = 1

        min_len = min(min_len, len(new_s))

    return min_len
