def convert(num, base):
    temp = "0123456789ABCDEF"
    q, r = divmod(num, base)

    if q == 0:
        return temp[r]
    else:
        return convert(q, base) + temp[r]


def solution(n, t, m, p):
    res = ""
    total = ""

    for i in range(m*t):
        total += str(convert(i, n))

    for i in range(p-1, t*m, m):
        res += total[i]

    return res


# 다른 사람의 풀이
def solution(n, t, m, p):
    data = ["0", "1", "2", "3", "4", "5", "6", "7",
            "8", "9", "A", "B", "C", "D", "E", "F"]
    numbers = "0"
    for number in range(1, t*m):
        temp = []
        while number > 0:
            temp.append(data[number % n])
            number //= n
        numbers += "".join(reversed(temp))

    return numbers[p-1:t*m:m]
