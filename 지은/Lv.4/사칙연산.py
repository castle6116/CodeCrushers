# 시간초과
def solution(arr):
    curr_max = -float('inf')

    def dfs(left_arr):
        nonlocal curr_max
        for i, e in enumerate(left_arr):
            if i + 2 == len(left_arr):
                break
            if e == "+" or e == "-":
                continue
            res = eval(left_arr[i]+left_arr[i+1]+left_arr[i+2])

            if len(left_arr) == 3:
                curr_max = max(curr_max, res)
                return
            elif len(left_arr) > i+3:
                res_arr = left_arr[:i]+[str(res)] + left_arr[i+3:]
            else:
                res_arr = left_arr[:i]+[str(res)]
            dfs(res_arr)
    dfs(arr)

    return curr_max

# 통과했지만 문제의 카테고리가 dp다.


def solution(arr):
    memo = {}

    def dfs(start, end):
        if (start, end) in memo:
            return memo[(start, end)]

        if start == end:
            return int(arr[start]), int(arr[start])

        curr_max = -float('inf')
        curr_min = float('inf')

        for i in range(start+1, end, 2):
            left_min, left_max = dfs(start, i-1)
            right_min, right_max = dfs(i+1, end)

            if arr[i] == "+":
                curr_max = max(curr_max, left_max + right_max)
                curr_min = min(curr_min, left_min + right_min)
            else:
                curr_max = max(curr_max, left_max - right_min)
                curr_min = min(curr_min, left_min - right_max)

        memo[(start, end)] = (curr_min, curr_max)
        return [curr_min, curr_max]

    return dfs(0, len(arr)-1)[1]

# 다른 사람의 풀이 1 - dp


def solution(arr):
    n = len(arr)
    dp_max = [[-float('inf')] * n for _ in range(n)]
    dp_min = [[float('inf')] * n for _ in range(n)]

    for i in range(0, n, 2):
        dp_max[i][i] = dp_min[i][i] = int(arr[i])

    for gap in range(2, n, 2):
        for start in range(0, n-gap, 2):
            end = start + gap
            for i in range(start+1, end, 2):
                if arr[i] == '+':
                    dp_max[start][end] = max(
                        dp_max[start][end], dp_max[start][i-1] + dp_max[i+1][end])
                    dp_min[start][end] = min(
                        dp_min[start][end], dp_min[start][i-1] + dp_min[i+1][end])
                else:
                    dp_max[start][end] = max(
                        dp_max[start][end], dp_max[start][i-1] - dp_min[i+1][end])
                    dp_min[start][end] = min(
                        dp_min[start][end], dp_min[start][i-1] - dp_max[i+1][end])

    return dp_max[0][-1]

# 다른 사람의 풀이2


def solution(arr):
    arrs = ''.join(arr).split('-')
    print(arrs)
    val0 = sum(list(map(int, arrs[0].split('+'))))
    if len(arrs) == 1:
        return val0

    min_val = 0
    max_val = 0
    for arr in arrs[:0:-1]:
        x = list(map(int, arr.split('+')))
        _min_val = -(sum(x))
        _max_val = sum(x[1:]) - x[0]
        min_val, max_val = min(_min_val + min_val, _min_val -
                               max_val), max(_max_val + max_val, _min_val - min_val)

    return val0 + max_val
