/*
문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/12924
 */

import java.util.*;

class Solution {
    static boolean check_num(int plus_result, int target_num, int input_n) {
        if (plus_result >= input_n) {
            return plus_result == input_n;
        }

        return check_num(target_num + plus_result, target_num + 1, input_n);
    }

    public int solution(int n) {
        int answer = 0;

        for (int idx = 1; idx <= n; idx++) {
            if (check_num(0, idx, n)) {
                answer++;
            }
        }

        return answer;
    }
}