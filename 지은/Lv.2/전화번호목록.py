def solution(phoneBook):
    def is_part(a, b):
        for i in range(len(a)):
            if a.pop() == b.pop():
                continue
            else:
                return False
        return True

    if len(phoneBook) < 2:
        return True

    arr = []
    for number in phoneBook:
        arr.append([i for i in number])
    reversed_arr = [number[::-1] for number in sorted(arr)]
    for i in range(len(reversed_arr)-1):
        a = reversed_arr[i][::1]
        b = reversed_arr[i+1][::1]
        if is_part(a, b):
            return False
    return True

# 더 짧게


def solution(phone_book):
    s = dict()
    for p in phone_book:
        for i in range(1, len(p)):
            s[p[:i]] = 1
    for p in phone_book:
        if p in s:
            return False
    return True
