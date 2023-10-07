/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/154540
 * @param {string[]} maps
 * @returns
 */
function solution(maps) {
  const len1 = maps.length;
  const len2 = maps[0].length;
  const mapArr = Array.from(Array(len1), (_, i) => maps[i].split(""));
  const moveX = [0, 0, 1, -1];
  const moveY = [1, -1, 0, 0];
  let answer = [];
  for (let i = 0; i < len1; i++) {
    for (let j = 0; j < len2; j++) {
      const food = mapArr[i][j];
      if (food === "X") continue;
      const queue = [[i, j]];
      mapArr[i][j] = "X";
      let foodDays = Number(food);
      while (queue.length) {
        const [y, x] = queue.shift();
        for (let k = 0; k < 4; k++) {
          const newY = y + moveY[k];
          const newX = x + moveX[k];
          if (
            newY >= 0 &&
            newX >= 0 &&
            newY < len1 &&
            newX < len2 &&
            mapArr[newY][newX] !== "X"
          ) {
            foodDays += Number(mapArr[newY][newX]);
            mapArr[newY][newX] = "X";
            queue.push([newY, newX]);
          }
        }
      }
      answer.push(foodDays);
    }
  }
  return answer.length ? answer.sort((a, b) => a - b) : [-1];
}
