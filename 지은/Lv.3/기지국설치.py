# 시간초과
import math


def solution(n, stations, w):
    apart = ["0" for _ in range(n)]

    for station in stations:

        station -= 1

        if station-w >= 0 and station + w <= n-1:
            for i in range(station-w, station+w+1):
                apart[i] = "#"
        elif station-w >= 0:
            for i in range(station-w, n):
                apart[i] = "#"
        elif station + w <= n-1:
            for i in range(0, station+w+1):
                apart[i] = "#"
        else:
            for i in range(0, n+1):
                apart[i] = "#"

    str = "".join(apart)
    no_services = str.split("#")

    ans = 0
    for no_service in no_services:
        count = math.ceil(len(no_service)/(2*w + 1))
        ans += count
    return ans


# 최적화 - 가능한 구간만 세기


def solution(n, stations, w):
    ans = 0
    before_first = stations[0] - w - 1
    after_last = n-stations[-1] - w
    if before_first > 0:
        ans += math.ceil(before_first / (2*w + 1))
    if after_last > 0:
        ans += math.ceil(after_last / (2*w + 1))

    for i in range(1, len(stations)):
        cnt = (stations[i]-w)-(stations[i-1] + w) - 1
        if cnt > 0:
            ans += math.ceil(cnt / (2*w + 1))

    return ans


# 풀이2


def solution(n, stations, w):
    yet = [stations[0] - w - 1] + [stations[i] - stations[i-1] - 2 *
                                   w - 1 for i in range(1, len(stations))] + [n - stations[-1] - w]
    yet = list(filter(lambda x: x > 0, yet))

    ans = sum(math.ceil(x/(2*w + 1)) for x in yet)
    return ans
