# 시간초과
def solution(sequence, k):
    left, diff, res = 0, 0, 0
    while res != k:
        if left == left+diff:
            res = sequence[left]
            if res == k:
                return [left, left+diff]
        else:
            res = sum([sequence[i] for i in range(left, left+diff + 1)])
            if res == k:
                return [left, left+diff]
        if left+diff == left + len(sequence):
            break

        if left+diff == len(sequence)-1:
            diff += 1
            left = 0
            continue
        left += 1

# 슬라이딩 윈도우 -> 2번 케이스 안됨


def solution(sequence, k):
    left = 0
    subseq_sum = 0

    for right in range(len(sequence)):
        if right == left:
            subseq_sum = sequence[left]
        else:
            subseq_sum += sequence[right]

        while subseq_sum > k and left < right:
            subseq_sum -= sequence[left]
            left += 1

        if subseq_sum == k:
            return [left, right]

    return None

# min_length


def solution(sequence, k):
    left = 0
    subseq_sum = 0
    min_length = float('inf')
    result = None

    for right in range(len(sequence)):
        subseq_sum += sequence[right]

        while subseq_sum >= k and left <= right:
            if subseq_sum == k and right - left + 1 < min_length:
                min_length = right - left + 1
                result = [left, right]

            subseq_sum -= sequence[left]
            left += 1

    return result
