def solution(picks, minerals):
    n = len(minerals)
    ans = 25*n
    fatigues = {"diamond": [1, 5, 25], "iron": [1, 1, 5], "stone": [1, 1, 1]}

    def dfs(idx, cnt, left, pick):
        nonlocal n, ans
        if idx == n or (not idx % 5 and left == [0, 0, 0]):
            ans = min(ans, cnt)
            return

        mineral = minerals[idx]

        if idx % 5:
            dfs(idx+1, cnt + fatigues[mineral][pick], left, pick)
        else:
            for i in range(3):
                if not left[i]:
                    continue
                left[i] -= 1
                dfs(idx+1, cnt + fatigues[mineral][i], left, i)
                left[i] += 1

    dfs(0, 0, picks, 0)
    return ans

# 다른 사람의 풀이


def solution(picks, minerals):
    def solve(picks, minerals, fatigue):
        if sum(picks) == 0 or len(minerals) == 0:
            return fatigue
        result = [float('inf')]
        for i, fatigues in enumerate(({"diamond": 1, "iron": 1, "stone": 1},
                                      {"diamond": 5, "iron": 1, "stone": 1},
                                      {"diamond": 25, "iron": 5, "stone": 1},)):
            if picks[i] > 0:
                temp_picks = picks.copy()
                temp_picks[i] -= 1
                result.append(
                    solve(temp_picks, minerals[5:], fatigue + sum(fatigues[mineral] for mineral in minerals[:5])))
        return min(result)

    return solve(picks, minerals, 0)
