def solution(record):
    users_dict = {}
    order = []
    for rec in record:
        info = rec.split();
        state,uid = info[0], info[1]
        
        if state in ["Enter", "Change"]:
            username = info[2]
            users_dict[uid] = username
        if state != "Change":
            order.append((uid,state))
            
    res =[]
    for uid,state in order:
        if state == "Enter":
            res.append(f"{users_dict[uid]}님이 들어왔습니다.")
        elif state == "Leave":
            res.append(f"{users_dict[uid]}님이 나갔습니다.")
    
    return res


# 다른 사람의 풀이1
def solution(record):
    answer = []
    namespace = {}
    printer = {'Enter':'님이 들어왔습니다.', 'Leave':'님이 나갔습니다.'}
    for r in record:
        rr = r.split(' ')
        if rr[0] in ['Enter', 'Change']:
            namespace[rr[1]] = rr[2]

    for r in record:
        if r.split(' ')[0] != 'Change':
            answer.append(namespace[r.split(' ')[1]] + printer[r.split(' ')[0]])

    return answer

# 다른 사람의 풀이2
def solution(record):
    answer = []
    id_nic = {}
    for r in record:
        s = r.split()
        if len(s) > 2:
            id_nic[s[1]] = s[2]

    for r in record:
        s = r.split()
        if s[0] == "Enter":
            answer.append(id_nic[s[1]] + "님이 들어왔습니다.")
        elif s[0] == "Leave":
            answer.append(id_nic[s[1]] + "님이 나갔습니다.")
    return answer
