/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/42888
 * ㅋㅋㅋㅋㅋ 너무 복잡하게 풀었다! ㅠㅠ
 * @param {string[]} record
 * @returns {string[]}
 */
function solution(record) {
  const recordObj = {};
  const answer = [];
  let j = 0;
  for (let i = 0; i < record.length; i++) {
    const [msg, id, nickname] = record[i].split(" ");
    let nowRecord = recordObj[id] || {
      nickname,
      index: [],
    };
    if (msg === "Enter") {
      answer.push(`님이 들어왔습니다.`);
      nowRecord.index.push(j);
      nowRecord = {
        ...nowRecord,
        nickname,
      };
      j++;
    } else if (msg === "Leave") {
      answer.push(`님이 나갔습니다.`);
      nowRecord.index.push(j);
      j++;
    } else {
      nowRecord = {
        ...nowRecord,
        nickname,
      };
    }
    recordObj[id] = { ...nowRecord };
  }
  for (const key in recordObj) {
    const indexArr = recordObj[key].index;
    const nickname = recordObj[key].nickname;
    for (const index of indexArr) {
      answer[index] = nickname + answer[index];
    }
  }
  return answer;
}

/**
 * @param {string[]} record
 * @returns {string[]}
 */
function solution(record) {
  const userInfo = {};
  const action = [];
  const stateMapping = {
    Enter: "님이 들어왔습니다.",
    Leave: "님이 나갔습니다.",
  };

  record.forEach((v) => {
    const [state, id, nick] = v.split(" ");

    if (state !== "Change") {
      action.push([state, id]);
    }

    if (nick) {
      userInfo[id] = nick;
    }
  });

  return action.map(([state, uid]) => {
    return `${userInfo[uid]}${stateMapping[state]}`;
  });
}
