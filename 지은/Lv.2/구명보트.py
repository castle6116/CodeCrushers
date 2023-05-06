def solution(people, limit) :
    ans = 0
    people.sort()

    a,b = 0, len(people) - 1
    while a < b :
        if people[b] + people[a] <= limit :
            a += 1
            ans += 1
        b -= 1
    return len(people) - ans

