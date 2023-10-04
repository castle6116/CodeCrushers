def min_operations(n):
    # 숫자 i를 1로 만드는데 필요한 최소 연산 횟수
    dp = [0] * (n+1)

    # 1. 0으로 초기화
    # 2. dp[0] = 0
    # 3. 점화식

    for i in range(2, n+1):
        dp[i] = dp[i-1] + 1

        if i % 2 == 0:
            dp[i] = min(dp[i], dp[i//2] + 1)

        if i % 3 == 0:
            dp[i] = min(dp[i], dp[i//3] + 1)

    return dp[n]


n = int(input())
print(min_operations(n))
