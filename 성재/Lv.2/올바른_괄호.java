/*
문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/12909
 */

import java.util.*;

class Solution {
    boolean solution(String s) {
        boolean answer = true;

        Stack<Character> stack = new Stack<>();
        char[] char_arr = s.toCharArray();

        // 총 괄호 개수가 짝수가 아니면 false
        if (char_arr.length % 2 != 0) {
            answer = false;
        }

        for (int char_idx : char_arr) {
            if (char_arr[char_idx] == '(') {
                stack.add(char_arr[char_idx]);

            } else if (char_arr[char_idx] == ')') {
                if (!stack.empty()) {
                    stack.pop();
                }
            }
        }

        if (!stack.empty()) {
            answer = false;
        }

        return answer;
    }
}
