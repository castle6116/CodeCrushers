/*
문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/12951
 */

import java.util.*;

class Solution {
    public String solution(String s) {
        StringBuilder answer = new StringBuilder();
        char[] s_char_arr = s.toLowerCase().toCharArray();

        for (int char_idx = 0; char_idx < s_char_arr.length; char_idx++) {
            boolean is_upper_target = false;

            // 빈칸이면 skip
            if (s_char_arr[char_idx] == ' ') {
                answer.append(' ');
                continue;
            }

            // 첫번째 글자이거나 이전 글자가 빈칸일 경우, upper 확인 대상
            if (char_idx == 0) {
                is_upper_target = true;

            } else {
                if (s_char_arr[char_idx - 1] == ' ') {
                    is_upper_target = true;
                }
            }

            // 숫자가 아닐 경우에는 대문자로 변환
            if (is_upper_target) {
                if (s_char_arr[char_idx] < '0' || s_char_arr[char_idx] > '9') {
                    s_char_arr[char_idx] -= 32;
                }
            }

            answer.append(s_char_arr[char_idx]);
        }

        return answer.toString();
    }
}