import re

def solution(files):
    a = sorted(files, key=lambda file: int(re.findall('\d+', file)[0]))
    b = sorted(a, key=lambda file: re.split('\d+',file.lower())[0])
    return b