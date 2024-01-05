function solution(s) {
  let count = 0;
  const brackets = ["(", ")", "[", "]", "{", "}"];
  for (let i = 0; i <= s.length; i++) {
    for (const bracket of brackets) {
      const modifiedStr = s.slice(0, i) + bracket + s.slice(i);
      if (validBrackets(modifiedStr)) {
        count++;
      }
    }
  }
  return count;
}

function validBrackets(str) {
  const stack = [];
  const bracketsObj = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (const char of str) {
    if (char in bracketsObj) {
      stack.push(char);
    } else {
      const top = stack.pop();
      if (bracketsObj[top] !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
