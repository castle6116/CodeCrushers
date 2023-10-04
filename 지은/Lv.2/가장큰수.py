from functools import cmp_to_key

def custom_compare(a, b):
    return int(b + a) - int(a + b)

def solution(numbers):
    strs = list(map(str, numbers))
    sorted_numbers = sorted(strs, key=cmp_to_key(custom_compare))
    print(sorted_numbers)
    largest_number = ''.join(sorted_numbers)
    return largest_number if largest_number[0] != '0' else '0'
