import collections


def solution(genres, plays):
    genre_song = collections.defaultdict(list)
    play_counter = collections.defaultdict(int)

    for i, (genre, play) in enumerate(zip(genres, plays)):
        play_counter[genre] += play
        genre_song[genre].append((play, i))

    for genre in genre_song:
        genre_song[genre].sort(key=lambda x: (x[0], -x[1]), reverse=True)

    sorted_genre = sorted(play_counter.keys(),
                          key=lambda x: play_counter[x], reverse=True)

    answer = []
    for genre in sorted_genre:
        answer += [idx for _, idx in genre_song[genre][:2]]
    return answer

# 다른 사람의 풀이


def solution(genres, plays):
    answer = []

    dic1 = {}
    dic2 = {}

    for i, (g, p) in enumerate(zip(genres, plays)):
        if g not in dic1:
            dic1[g] = [(i, p)]
        else:
            dic1[g].append((i, p))

        if g not in dic2:
            dic2[g] = p
        else:
            dic2[g] += p

    for (k, v) in sorted(dic2.items(), key=lambda x: x[1], reverse=True):
        for (i, p) in sorted(dic1[k], key=lambda x: x[1], reverse=True)[:2]:
            answer.append(i)

    return answer
