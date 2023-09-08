from collections import deque


def solution(begin, target, words):
    min_depth = float('inf')

    def dfs(subject, arr, depth):
        nonlocal min_depth

        if subject == target:
            min_depth = min(min_depth, depth)
            return

        for word in arr:
            if differ_by_one(subject, word):
                new_arr = arr[:]
                new_arr.remove(word)
                dfs(word, new_arr, depth+1)

    def differ_by_one(word1, word2):
        diff_count = 0
        for c1, c2 in zip(word1, word2):
            if c1 != c2:
                diff_count += 1
            if diff_count > 1:
                return False
        return diff_count == 1

    if target not in words:
        return 0

    dfs(begin, words, 0)
    return min_depth if min_depth < float('inf') else 0


# 다른 사람의 풀이(BFS, generator)

def get_adjacent(current, words):
    for word in words:
        if len(current) != len(word):
            continue

        count = 0
        for c, w in zip(current, word):
            if c != w:
                count += 1

        if count == 1:
            yield word


def solution(begin, target, words):
    dist = {begin: 0}
    queue = deque([begin])

    while queue:
        current = queue.popleft()

        for next_word in get_adjacent(current, words):
            if next_word not in dist:
                dist[next_word] = dist[current] + 1
                queue.append(next_word)

    return dist.get(target, 0)


# 다른 사람의 풀이2(BFS)

def solution(begin, target, words):
    answer = 0
    Q = [begin]

    while True:
        temp_Q = []
        for word_1 in Q:
            if word_1 == target:
                return answer
            for i in range(len(words)-1, -1, -1):
                word_2 = words[i]
                if sum([x != y for x, y in zip(word_1, word_2)]) == 1:
                    temp_Q.append(words.pop(i))

        if not temp_Q:
            return 0
        Q = temp_Q
        answer += 1


# 내가 푼 두번째 풀이

def solution(begin, target, words):
    if target not in words:
        return 0

    min_depth = float('inf')
    visited = set()

    def dfs(curr, depth):
        nonlocal min_depth
        if curr == target:
            min_depth = min(depth, min_depth)
        for word in words:
            diff_counter = 0
            if word not in visited and sum(a != b for a, b in zip(curr, word)) == 1:
                visited.add(word)
                dfs(word, depth + 1)
                visited.remove(word)

    dfs(begin, 0)
    return min_depth if min_depth != float('inf') else 0


# BFS로 푸는것이 더 좋다. 왜냐하면 층별로 탐색하기 때문에 먼저 찾으면 더 빠르게 탐색을 종료할 수 있기 때문이다.
