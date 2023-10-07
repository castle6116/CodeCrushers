const [msg, ...maze] = require("fs")
  .readFileSync(__dirname + "/example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

// 당신은 미로의 설계자입니다. 당시닝 만든 미로는 다음과 같은 특징이 있습니다.
// 1. 미로는 n * m 크기의 2차원 격자 형태입니다.
// 2. 미로에는 디동 사능한 빈칸과 0 또는 1을 가진 벽이 있습니다.
// 3. 벽에 인접한 빈칸에 있는 참가자는 벽에 쓰여있는 숫자를 확인할 수 있습니다.
// 4. 참가자는 상하좌우로 인접한 빈칸으로 이동 가능합니다.
// 5. 미로에는 적어도 빈칸 한 개가 존재합니다.
// 미로를 탐험하다가 탐험을 포기한 조난자는 다음과 같이 메세지를 보내 구조 요청을 할 수 있습니다.
// 1. 미로에 있는 벽 중 아무 벽이나 짚고 출발합니다. 참가자가 출발한 위치와 방향은 알 수 없습니다. 단, 벽에 인접한 빈칸에서만 출발했다고 가정합니다.
// 2. 벽을 짚고 한 방향으로만 이동합니다. 출발할 때와 짚고 있는 벽의 변이 바뀔 때마다 짚은 벽에 써진 숫자를 순서대로 기록합니다.
// 3. 숫자 k개를 기록했으면 기록한 내용을 메세지로 보냅니다.
// 4. 조난자는 마지막으로 숫자를 기록한 벽 앞에서 구조를 기다립니다.
// 미로의 구조가 [[1, 0, 0, 2, 2, 2, 2], [2, 2, 1, 2, 1, 0, 2], [2, 0, 1, 2, 2, 2, 2], [2, 2, 2, 2, 1, 2, 2], [2, 1, 0, 0, 1, 2, 2]] 일 때
// 구조가 필요한 조난자의 메시지가 하나 도착하였습니다. 메세지는 [1, 0, 0, 0, 1]입니다.
// 조난자가 현재 있을 수 있는 위치는 [0, 4], [1, 1], [2, 4], [3, 2] 4가지 입니다.
// 조난자의 메세지를 나타내는 1차원 정수 배열 msg와 미로의 정보를 나타내는 2차원 배열 maze가 주어집니다. 예측 가능한 조난자의 위치의 목록을 2차원 정수 배열에 담에 return 하시오.
// 첫번째 원소로 오름차순

// [제한 사항]
// 2 <= msg의 길이 = k <= 30
// 3 <= maze 의 각각 가로, 세로 길이 <= 1,000
// maze의 원소는 0, 1, 2 중 하나입니다.
// 2는 해당 칸이 비어있다는 의미이며, 0, 1은 해당칸이 각각 숫자로 이루어진 벽이라는 의미입니다.

function solution(msg, maze) {
  let answer = [];
  const len1 = maze.length;
  const len2 = maze[0].length;
  const moveY = [-1, 0, 1, 0];
  const moveX = [0, 1, 0, -1];
  const mazeArr = Array.from(Array(len1), (_, i) => {
    return maze[i].split("").map((m, j) => {
      if (m === "2") {
        return 2;
      }
      let newM = [null, null, null, null];
      for (let k = 0; k < 4; k++) {
        const y = i + moveY[k];
        const x = j + moveX[k];
        if (y >= 0 && x >= 0 && y < len1 && x < len2 && maze[i][j] === "2") {
          newM[k] = Number(m);
        }
      }
      return newM;
    });
  });
  for (let i = 0; i < len1; i++) {
    for (let j = 0; j < len2; j++) {
      const m = mazeArr[i][j];
      const set = [];
      if (m === 2) continue;
      const queue = [[i, j]];
      //while()
      for (let k = 0; k < 4; k++) {
        const y = i + moveY[k];
        const x = j + moveX[k];
      }
    }
  }
  return answer;
}

console.log(solution(msg, maze));
