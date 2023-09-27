import operator

def solution(data, col, row_begin, row_end):
    sorted_arr = sorted(data, key=lambda x: (x[col-1], -x[0]))
    
    res = 0
    for i in range(row_begin-1, row_end):
        S_i = sum([k%(i+1) for k in sorted_arr[i]])
        res ^= S_i

    return res


        