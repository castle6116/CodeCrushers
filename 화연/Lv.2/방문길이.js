/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/49994
 * @param {string} dirs
 * @returns {number}
 */
function solution(dirs) {
  const dirObj = { U: 1, D: -1, R: 1, L: -1 };
  const root = [];
  let posi = [5, 5];
  for (const dir of [...dirs]) {
    let [prevx, prevy] = posi;
    if (dir === "U") {
      if (posi[0] === 10) continue;
      posi[0] += 1;
    } else if (dir === "D") {
      if (posi[0] === 0) continue;
      posi[0] -= 1;
    } else if (dir === "R") {
      if (posi[1] === 10) continue;
      posi[1] += 1;
    } else {
      if (posi[1] === 0) continue;
      posi[1] -= 1;
    }
    const move = `(${prevx}, ${prevy})-(${posi[0]}, ${posi[1]})`;
    const move2 = `(${posi[0]}, ${posi[1]})-(${prevx}, ${prevy})`;
    root.push(move);
    root.push(move2);
  }
  return new Set(root).size / 2;
}
