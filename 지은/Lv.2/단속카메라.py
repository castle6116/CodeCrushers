def solution(routes):
    routes.sort(key=lambda x: x[1])
    count = 0

    curr_last = -float('Inf')
    for route in routes:
        if curr_last >= route[0]:
            continue
        else:
            curr_last = route[1]
            count += 1
    return count
