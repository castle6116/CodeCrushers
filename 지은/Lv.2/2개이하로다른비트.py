def solution(numbers):
    res = []

    for number in numbers:
        if number % 2 == 0:
            res.append(number + 1)
        else:
            binary = format(number, "b")
            zero_index = binary.rfind("01")
            if zero_index == -1:
                new_binary = "10" + binary[1:]
            else:
                new_binary = binary[:zero_index] + \
                    "10" + binary[zero_index + 2:]
            res.append(int(new_binary, 2))

    return res


# 다른 사람의 풀이 :bitwise
# >> 2 : 4로 나눈것과 같다
def solution(numbers):
    answer = []
    for val in numbers:
        answer.append(((val ^ (val+1)) >> 2) + val + 1)

    return answer
