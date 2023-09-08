def solution(a, b, g, s, w, t):
    l, r = 1, 4*(10**14)
    n = len(g)
    while l <= r:
        T = (l+r)//2
        W, G, S = 0, 0, 0
        for town in range(n):
            if T < t[town]:
                continue
            available_cap = w[town] + ((T-t[town])//(t[town] * 2)) * w[town]
            G += min(available_cap, g[town])
            S += min(available_cap, s[town])
            W += min(available_cap, s[town] + g[town])
        if G >= a and S >= b and W >= (a+b):
            r = T - 1
        else:
            l = T + 1
    return l
