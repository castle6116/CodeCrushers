/*
문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/12973
 */

import java.util.*;

class Solution
{
    public int solution(String s) {
        int answer = 0;
        Stack<Character> stack = new Stack<Character>();

        char[] n_char_arr = s.toCharArray();
        for (char c : n_char_arr) {
            if (!stack.isEmpty()) {
                if (stack.peek() == c) {
                    stack.pop();
                    continue;
                }
            }

            stack.add(c);
        }

        if (stack.isEmpty()) {
            answer = 1;
        }

        return answer;
    }
}