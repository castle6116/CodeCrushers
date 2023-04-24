def solution(n, k):
    def is_prime(num):
        if num == 1:
            return False
        for divisor in range(2, int(num ** 0.5) + 1):
            if num % divisor == 0:
                return False
        return True

    res = ""
    while n:
        res = str(n % k) + res
        n //= k

    arr = res.split("0")
    arr = [int(x) for x in arr if x != ""]

    count = sum(is_prime(i) for i in arr)
    return count
