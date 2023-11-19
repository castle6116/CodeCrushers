function solution(play_list, listen_time) {
  const songSize = play_list.length;
  if ((play_list, resuce((a, b) => a + b, 0) <= listen_time)) {
    return songSize;
  }

  play_list = play_list.concat(play_list);

  let maxSongs = 0;
  for (let i = 0; i < songSize * 2; i++) {
    let nowMaxSongs = 1;
    let playTime = listen_time - 1;
    let j = i;
    while (playTime > 0) {
      nowMaxSongs++;
      playTime -= play_list[j];
      j++;
    }
    maxSongs = Math.max(maxSongs, nowMaxSongs);
  }
  return maxSongs;
}
