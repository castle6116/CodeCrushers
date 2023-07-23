def solution(m, musicinfos):
    def convert(music):
        music = music.replace('C#', 'c')
        music = music.replace('D#', 'd')
        music = music.replace('F#', 'f')
        music = music.replace('G#', 'g')
        music = music.replace('A#', 'a')
        return music

    m = convert(m)
    answer = ('(None)', None)

    for info in musicinfos:
        start, end, title, music = info.split(',')
        start = list(map(int, start.split(':')))
        end = list(map(int, end.split(':')))
        time = 60*(end[0]-start[0]) + (end[1]-start[1])
        music = convert(music)
        music_played = (music*time)[:time]

        if m in music_played:
            if (answer[1] is None) or (time > answer[1]):
                answer = (title, time)

    return answer[0]
