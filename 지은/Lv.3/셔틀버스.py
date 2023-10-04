# 70.8점
def solution(n, t, m, timetable):
    def hhmm(num):
        hour,minute = divmod(num,60)
        if len(str(minute)) == 1:
            minute = "0" + str(minute)
        else:
            minute = str(minute)
        if len(str(hour)) == 1:
            hour = "0" + str(hour)
        else:
            hour = str(hour)
        return hour + ":" + minute
    
    arrivals = []
    for arrival in timetable:
        hour, minute = arrival.split(":")    
        arrivals.append(int(hour) * 60 + int(minute))
    arrivals.sort(reverse=True)
    print(arrivals)
    
    turn = 540
    
    while n:
        tmp = arrivals[-1]
        done = False
        n -= 1
        seat = m
        while seat:
            if not arrivals:
                break
            if arrivals[-1] > turn:
                done = True
                break
            if arrivals[-1] <= turn:
                tmp = arrivals.pop()
                seat -= 1
                

        if seat > 0 and n == 0:

            return hhmm(turn)
        elif seat ==0 and n == 0:
            return hhmm(tmp-1)
        
        if done:
            turn += t
            
            
# datetime 모듈 사용해서 간략화 후 오류 찾아냄 - 시간이 datetime.date(2023, 7, 23) 형식

from datetime import datetime, timedelta

def solution(n, t, m, timetable):
    def to_time(time_str):
        return datetime.strptime(time_str, "%H:%M")

    def to_str(time_obj):
        return time_obj.strftime("%H:%M")

    arrivals = sorted([to_time(time) for time in timetable])

    bus_time = to_time("09:00")

    while n:
        capacity = m
        
        while capacity:
            if not arrivals:
                break
            if arrivals[0] <= bus_time:
                last_boarding = arrivals.pop(0)
                capacity -= 1
            else:
                break

        if n == 1:
            if capacity > 0:
                return to_str(bus_time)
            else:
                return to_str(last_boarding - timedelta(minutes=1))

        bus_time += timedelta(minutes=t)
        
        n -= 1

    return to_str(to_time("09:00"))


# zfill을 사용하는 것이 시간을 숫자로써 다루기가 더 쉽다


# 요구시항을 정리해봤다.

# 1. 시간을 분으로 변환
# 2. 도착 시간 정렬
# 3. 버스 운행: 버스가 정해진 시간에 운행되며, 각 버스에 크루을 태워야 한다. 이 때, 마지막 버스의 경우 조금 다른 로직을 적용해야 한다.
# 4. 마지막 버스 처리: 마지막 버스의 경우, 크루이 버스의 수용량보다 적으면 버스의 출발 시간에 도착하면 된다. 
#                   만약 수용량보다 많은 크루이 대기 중이라면, 마지막으로 탈 수 있는 크루보다 1분 일찍 도착해야 한다.

# - 탑승로직
# 대기 중인 크루 중 버스의 출발 시간 전에 도착한 크루만 탑승시키자
# 만약 크루의 수가 버스의 수용량보다 적으면 해당 크루들은 모두 탑승시키자
# 크루의 수가 버스의 수용량보다 많으면, 수용량 만큼의 크루을 탑승시키고 나머지 크루은 다음 버스 대기시킴

# - 마지막 버스 처리
# 대기 중인 크루의 수가 마지막 버스의 수용량보다 적으면, 버스의 출발 시간에 도착하면 된다.
# 대기 중인 크루의 수가 마지막 버스의 수용량보다 많으면, 마지막으로 탈 수 있는 크루보다 1분 일찍 도착해야 한다.


# 그냥 막차 전과 막차 두가지 경우만 생각하면 쉽다
def solution(n, t, m, timetable):
    def time_to_minutes(time):
        hh, mm = map(int, time.split(':'))
        return hh * 60 + mm
    
    def minutes_to_time(minutes):
        hh, mm = divmod(minutes, 60)
        return "{:02d}:{:02d}".format(hh, mm)
    
    arrivals = sorted([time_to_minutes(time) for time in timetable])
    
    # 마지막 버스 시간
    last_bus_time = 540 + (n - 1) * t
    
    # 마지막 버스 전까지 처리
    for k in range(n - 1):
        bus_arrive_time = 540 + t * k
        
        for _ in range(m):
            if arrivals and arrivals[0] <= bus_arrive_time:
                arrivals.pop(0)
    
    # 마지막 버스에 대한 처리
    for _ in range(m):
        # 마지막 자리에 탈 크루가 없는 경우(크루는 있는데 마지막 버스를 놓치는 경우도 포함) 
        if not arrivals or arrivals[0] > last_bus_time:
            return minutes_to_time(last_bus_time)
        else:
            last_crew_time = arrivals.pop(0)
    
    return minutes_to_time(last_crew_time - 1)
