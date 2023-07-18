from itertools import permutations

def solution(expression):
    operations = ['+', '-', '*']
    op = [x for x in operations if x in expression]
    op = [list(y) for y in permutations(op)]
    
    ex = ''
    for e in expression:
        if e in operations:
            ex += ' ' + e + ' '
        else:
            ex += e
    ex = ex.split(' ')
    
    maximum = 0

    for o in op:
        _ex = ex.copy()
        
        for i in o:
            while i in _ex:
                idx = _ex.index(i)
                _ex[idx-1] = str(eval(_ex[idx-1] + _ex[idx] + _ex[idx+1]))
                _ex = _ex[:idx] + _ex[idx+2:]
                
        maximum = max(maximum, abs(int(_ex[0])))
    return maximum

# 다른 사람의 풀이
from itertools import permutations
def calc(priority, n, expression):
    if n == 2:
        return str(eval(expression))
    if priority[n] == '*':
        res = eval('*'.join([calc(priority, n + 1, e) for e in expression.split('*')]))
    if priority[n] == '+':
        res = eval('+'.join([calc(priority, n + 1, e) for e in expression.split('+')]))
    if priority[n] == '-':
        res = eval('-'.join([calc(priority, n + 1, e) for e in expression.split('-')]))
    return str(res)

def solution(expression):
    answer = 0
    priorities = (list(permutations(['*','-','+'], 3)))
    for priority in priorities:
        res = int(calc(priority, 0, expression))
        answer = max(answer, abs(res))

    return answer