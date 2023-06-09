# dp 문제/ 잘 몰라서 House Robber problem 해설 참고
# rob=max(arr[0]+rob[2:n], rob[1:n])

def solution(sticker):
    n = len(sticker)
    if n == 1:
        return sticker[0]

    # Case 1: rob first but last
    dp1 = [0]*n
    dp1[0] = sticker[0]
    dp1[1] = max(sticker[0], sticker[1])

    for i in range(2, n-1):
        print(i, dp1[i-1], dp1[i-2] + sticker[i])
        dp1[i] = max(dp1[i-1], dp1[i-2] + sticker[i])

    # Case 2: rob last but first
    dp2 = [0]*n
    dp2[1] = sticker[1]

    for i in range(2, n):
        dp2[i] = max(dp2[i-1], dp2[i-2] + sticker[i])

    return max(max(dp1), max(dp2))
