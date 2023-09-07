def solution(distance, rocks, n):
    rocks.sort()
    rocks.append(distance)

    left, right = 0, distance
    answer = 0

    while left <= right:
        mid = (left + right) // 2
        min_distance = float('inf')
        curr = 0
        deleted = 0

        for rock in rocks:
            diff = rock - curr
            if diff < mid:
                deleted += 1
            else:
                min_distance = min(min_distance, diff)
                curr = rock

            if deleted > n:
                break

        if deleted > n:
            right = mid - 1
        else:
            answer = max(answer, min_distance)
            left = mid + 1

    return answer
