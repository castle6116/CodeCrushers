import collections


def solution(arr):
    res = []

    def check_square(square):
        plain = []
        for row in square:
            for col in row:
                plain.append(col)
        if len(set(plain)) == 1:
            res.append(plain[0])
        else:
            break_square(square)
        return

    def break_square(square):
        half = int(len(square)/2)
        first, second, third, fourth = [[] for i in range(half)], [[] for i in range(
            half)], [[] for i in range(half)], [[] for i in range(half)]
        for r, row in enumerate(square):
            for c, col in enumerate(row):
                if r < half and c < half:
                    first[r].append(col)
                elif r < half and c >= half:
                    second[r].append(col)
                elif r >= half and c < half:
                    third[c].append(col)
                else:
                    fourth[int(r-2*half)].append(col)
        check_square(first)
        check_square(second)
        check_square(third)
        check_square(fourth)

    check_square(arr)
    counter = collections.Counter(res)
    return [counter[0], counter[1]]


# 다른 사람의 풀이
def solution(arr):
    answer = [0, 0]

    def check(size, x, y):
        if size == 1:
            answer[arr[y][x]] += 1
            return
        else:
            first = arr[y][x]

            for dy in range(size):
                for dx in range(size):
                    if first != arr[y + dy][x + dx]:
                        check(size // 2, x, y)
                        check(size // 2, x + size // 2, y)
                        check(size // 2, x, y + size // 2)
                        check(size // 2, x + size // 2, y + size // 2)
                        return
            answer[first] += 1
    check(len(arr), 0, 0)

    return answer
