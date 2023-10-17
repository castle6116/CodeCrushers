import heapq


def max_jewelry_price(N, K, jewels, bags):
    jewels.sort(key=lambda x: x[0])
    bags.sort()
    max_price = 0
    available_jewels = []
    jewel_idx = 0

    for bag in bags:
        while jewel_idx < N and jewels[jewel_idx][0] <= bag:
            heapq.heappush(available_jewels, -jewels[jewel_idx][1])
            jewel_idx += 1
        if available_jewels:
            max_price -= heapq.heappop(available_jewels)

    return max_price


N, K = map(int, input().split())
jewels = [tuple(map(int, input().split())) for _ in range(N)]
bags = [int(input()) for _ in range(K)]
print(max_jewelry_price(N, K, jewels, bags))
