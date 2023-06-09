# 시간초과
def solution(sticker):
    res = []
    k = 0
    while k < len(sticker):
        print(f"-----k: {k}")
        sticker = sticker[k:] + sticker[:k]
        print(f"sticker = {sticker}")
        total = 0
        forbid_idx = []
        for i, e in enumerate(sticker):

            if i not in forbid_idx:
                total += e

                f1, f2 = i-1, i+1
                if f1 < 0:
                    f1 = len(sticker) - 1
                if f2 > len(sticker)-1:
                    f2 = 0
                forbid_idx += [f1, f2]
            else:
                continue

        res.append(total)
        print(total)
        k += 1
    print(res)
    return max(res)
