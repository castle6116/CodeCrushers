def solution(A, B):
    A.sort(reverse=True)
    B.sort(reverse=True)
    max_points = 0
    b_index = 0

    for a in A:
        if B[b_index] > a:
            max_points += 1
            b_index += 1

    return max_points
