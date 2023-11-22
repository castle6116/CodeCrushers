function solution(s) {
  let count = 0;

  for (let i = 0; i <= s.length; i++) {
    for (const bracket of ["(", ")", "[", "]", "{", "}"]) {
      const modifiedString = s.slice(0, i) + bracket + s.slice(i);

      if (isValidParentheses(modifiedString)) {
        count++;
      }
    }
  }

  return count;
}

// Helper 함수: 주어진 문자열이 올바른 괄호 문자열인지 확인하는 함수
function isValidParentheses(str) {
  const stack = [];

  const brackets = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (const char of str) {
    if (char in brackets) {
      stack.push(char);
    } else {
      const top = stack.pop();
      if (brackets[top] !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

// 예제 사용
const exampleString = "[]([[]){}";
const result = solution(exampleString);
console.log(result); // 출력 예상값: 3
