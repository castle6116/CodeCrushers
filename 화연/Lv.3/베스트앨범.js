// 1. 같은 장르끼리 묶어야함
// 2. 묶인 노래들을 재생 순으로 정렬을 해야함
// 3. 노래를 두개까지 자르는 작업을 해야함
// keywords: 묶는 것, 정렬
/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/42579
 * @author HwaYeon
 * @param {*} genres 
 * @param {*} plays 
 * @returns 
 */
function solution(genres, plays) {
  const genresMap = new Map();
  
  for(let i = 0; i < genres.length; i++) {
      const [genre, play] = [genres[i], plays[i]];
      const data = genresMap.get(genre) || { total: 0, songs: [] };
      const genreInfo = {
        total: data.total + play,
        songs: [...data.songs, { play, i }]
          .sort((a, b) => b.play - a.play)
          .slice(0, 2),
      };
      genresMap.set(genre, genreInfo);
  }
  
  return [...genresMap.entries()]
    .sort((a, b) => b[1].total - a[1].total)
    .flatMap(item => item[1].songs)
    .map(songs => songs.i);
}