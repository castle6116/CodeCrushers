from collections import defaultdict
from math import ceil

def solution(fees, records):
    parking_records = defaultdict(lambda: [0, 0, False])

    for record in records:
        time, car, status = record.split()
        hours, minutes = map(int, time.split(':'))
        total_minutes = hours * 60 + minutes

        if status == "IN":
            parking_records[car][0] = total_minutes
            parking_records[car][2] = True
        else:
            parking_time = total_minutes - parking_records[car][0]
            parking_records[car][1] += parking_time
            parking_records[car][2] = False

    answer = []

    for car, times in sorted(parking_records.items()):
        in_time, total_parked_time, is_in = times
        if is_in:
            total_parked_time += 1439 - in_time

        fee = fees[1] + ceil(max(0, total_parked_time - fees[0]) / fees[2]) * fees[3]
        answer.append(fee)

    return answer



# 다른 사람의 풀이
from collections import defaultdict
from math import ceil

class Parking:
    def __init__(self, fees):
        self.fees = fees
        self.in_flag = False
        self.in_time = 0
        self.total = 0

    def update(self, t, state):
        self.in_flag = True if state=='IN' else False
        if self.in_flag:  
            self.in_time = to_minutes(t)
        else:             
            self.total  += (to_minutes(t) - self.in_time)

    def calc_fee(self):
        if self.in_flag: self.update('23:59', 'out')
        add_t = self.total - self.fees[0]
        return self.fees[1] + ceil(add_t/self.fees[2]) * self.fees[3] if add_t >= 0 else self.fees[1]

def to_minutes(string):
    hour,minutes=string.split(":")
    return int(hour)*60 + int(minutes)

def solution(fees, records):
    recordsDict = defaultdict(lambda:Parking(fees))
    
    for record in records:
        t, car, state = record.split()
        recordsDict[car].update(t, state)
        
    return [v.calc_fee() for k, v in sorted(recordsDict.items())]



# 위 사람의 풀이를 보고 내 풀이의 기능들도 함수 단위로 나누어 보았다.
from collections import defaultdict
from math import ceil

def to_minute(time):
    hours, minutes = time.split(":")
    return int(hours) * 60 + int(minutes)

def process_parking_records(fees, records):
    parking_records = defaultdict(lambda: [0, 0, False])

    for record in records:
        arr = record.split()
        car, minute_stamp, status = arr[1], to_minute(arr[0]), arr[2]

        if status == "IN":
            parking_records[car][0] = minute_stamp
            parking_records[car][2] = True
        else:
            parking_time = minute_stamp - parking_records[car][0]
            parking_records[car][1] += parking_time
            parking_records[car][2] = False
    return parking_records

def calculate_fees(fees, parking_records):
    res = []
    for car, record in sorted(parking_records.items()):
        in_time, total_parked_time, is_in = record
        if is_in:
            total_parked_time += 1439 - in_time

        fee = fees[1] + ceil(max(0, total_parked_time - fees[0]) / fees[2]) * fees[3]
        res.append(fee)

    return res

def solution(fees, records):
    parking_records = process_parking_records(fees, records)
    return calculate_fees(fees, parking_records)