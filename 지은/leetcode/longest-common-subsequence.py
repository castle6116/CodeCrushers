# DP is all about finding the sub-problem
def longestCommonSubsequence(text1: str, text2: str):
    dp = [[0 for j in range(len(text2)+1)] for i in range(len(text1)+1)]

    for i in range(len(text1)-1, -1, -1):
        for j in range(len(text2)-1, -1, -1):
            if text1[i] == text2[j]:
                dp[i][j] = 1 + dp[i+1][j+1]
            else:
                dp[i][j] = max(dp[i][j+1], dp[i+1][j])
    print(dp)
    return dp[0][0]


# print(longestCommonSubsequence("abcde", "ace"))
print(longestCommonSubsequence("bsbininm", "jmjkbkjkv"))
