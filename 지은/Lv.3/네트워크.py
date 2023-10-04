def solution(n, computers):
    def dfs(computers, visited, k):
        visited[k] = True
        for m, connection in enumerate(computers[k]):
            if connection == 1 and not visited[m]:
                dfs(computers, visited, m)

    visited = [False] * n
    networks = 0

    for i in range(n):
        if not visited[i]:
            dfs(computers, visited, i)
            networks += 1

    return networks


# 다른 사람의 풀이 - 같은 네트워크에 있는 노드는 같은 숫자로 치환
def solution(n, computers):
    temp = []
    for i in range(n):
        temp.append(i)
    for i in range(n):
        for j in range(n):
            if computers[i][j]:
                for k in range(n):
                    if temp[k] == temp[i]:
                        temp[k] = temp[j]
    return len(set(temp))


# 다른 사람의 풀이 - BFS
def solution(n, computers):
    def BFS(node, visit):
        que = [node]
        visit[node] = 1
        while que:
            v = que.pop(0)
            for i in range(n):
                if computers[v][i] == 1 and visit[i] == 0:
                    visit[i] = 1
                    que.append(i)
        return visit

    visit = [0 for i in range(n)]
    answer = 0

    for i in range(n):
        try:
            visit = BFS(visit.index(0), visit)
            answer += 1
        except:
            break

    return answer



# union find


def solution(n, computers):
    parents = [i for i in range(n)]

    def find(a):
        if parents[a] == a:
            return a
        parents[a] = find(parents[a])
        return parents[a]

    def union(a, b):
        aP = find(a)
        bP = find(b)

        if aP < bP:
            parents[bP] = aP
        else:
            parents[aP] = bP

    for row in range(n):
        for col in range(n):
            if row == col:
                continue

            if computers[row][col]:
                union(row, col)

    ans = set()
    for i in range(n):
        ans.add(find(parents[i]))
    return len(ans)
