/*
문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/70129
 */

import java.util.*;

class Solution {
    public int[] solution(String s) {
        int[] answer = new int[2];
        StringBuilder buffer = new StringBuilder(s);

        while (!buffer.toString().equals("1")) {
            char[] char_arr = buffer.toString().toCharArray();

            // 0의 개수 및 1의 개수 count
            int one_count = 0;
            for (char binary_ch : char_arr) {
                if (binary_ch == '0') {
                    answer[1] += 1;

                } else if (binary_ch == '1') {
                    one_count++;
                }
            }

            // buffer 초기화
            buffer.delete(0, buffer.length());

            while (one_count != 0) {
                buffer.append(one_count % 2);

                one_count /= 2;
            }

            answer[0] += 1;
        }

        return answer;
    }
}