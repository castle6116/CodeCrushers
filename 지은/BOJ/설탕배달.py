def solution(N):
    fiveKiloBag = N // 5
    remaining_weight = N % 5

    while fiveKiloBag >= 0:
        if remaining_weight % 3 == 0:
            threeKiloBag = remaining_weight // 3
            print(fiveKiloBag + threeKiloBag)
            break
        fiveKiloBag -= 1
        remaining_weight += 5
    else:
        print(-1)


N = int(input())
print(solution(N))
