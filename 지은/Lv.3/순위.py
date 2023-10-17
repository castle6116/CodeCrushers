# Floyd-Warshall : 모든 정점에서 모든 정점으로의 최단경로, 경유지, 삼중for문, 2차원 배열

def solution(n, results):
    graph = [[False] * (n+1) for _ in range(n+1)]
    print(graph)

    for a, b in results:
        graph[a][b] = True

    for k in range(1, n+1):
        for i in range(1, n+1):
            for j in range(1, n+1):
                if graph[i][k] and graph[k][j]:
                    graph[i][j] = True

    answer = 0
    for i in range(1, n+1):
        count = 0
        for j in range(1, n+1):
            if graph[i][j] or graph[j][i]:
                count += 1
        if count == n-1:
            answer += 1

    return answer


# 좋은 풀이
def solution(n, results):
    total = [['?' for i in range(n)] for j in range(n)]

    for i in range(n):
        total[i][i] = 'SELF'

    for result in results:
        total[result[0]-1][result[1]-1] = 'WIN'
        total[result[1]-1][result[0]-1] = 'LOSE'

    for k in range(n):
        for i in range(n):
            for j in range(n):
                if total[i][k] == 'WIN' and total[k][j] == 'WIN':
                    total[i][j] = 'WIN'
                elif total[i][k] == 'LOSE' and total[k][j] == 'LOSE':
                    total[i][j] = 'LOSE'

    answer = 0

    for i in total:
        if '?' not in i:
            answer += 1

    return answer
