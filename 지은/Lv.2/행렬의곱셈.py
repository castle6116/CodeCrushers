# zip(*arr2) : transpose matrix
def solution(arr1, arr2):
    res = [[0] * len(arr2[0]) for _ in range(len(arr1))]
    for i, row1 in enumerate(arr1):
        for j, col2 in enumerate(zip(*arr2)):
            res[i][j] = sum(x*y for x, y in zip(row1, col2))
    return res


# 다른 사람의 풀이
def productMatrix(A, B):
    answer = []

    for i in range(len(A)):
        arr = []
        for j in range(len(B[0])):
            tmp = 0
            for k in range(len(A[0])):
                tmp += A[i][k] * B[k][j]
            arr.append(tmp)
        answer.append(arr)

    return answer


# numPy
def productMatrix(A, B):

    x = np.array(A)
    y = np.array(B)
    answer = x*y

    return answer.tolist()
