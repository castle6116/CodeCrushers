import string
def solution(myString):
    alphabets = string.ascii_lowercase
    l_idx = alphabets.index("l")
    res = ""
    for letter in myString:
        if alphabets.index(str(letter)) < l_idx:
            res += "l"
        else:
            res += letter
    return res


# 다른 사람의 풀이1 - maketrans, translate
def solution(myString):
    return myString.translate(str.maketrans('abcdefghijk', 'lllllllllll'))

# 다른 사람의 풀이2 - ord();integer representing the Unicode character.
def solution(myString):
    answer = ''
    for x in myString:
        if ord(x)<=ord("l"):
            answer+="l"
        else:
            answer+=x
    return answer


# 다른 사람의 풀이3 - letter를 부등호로 비교
def solution(myString):
    answer = [x if x > 'l' else 'l' for x in myString]
    return ''.join(answer)