/*
문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/148652
 */

import java.util.*;

class Solution {
    public int solution(int[] priorities, int location) {
        // 총 bit 개수 (5의 n승)
        long max_bit_count = (long) Math.pow(5, n);
        int answer = 0;

        for (long idx = l; idx <= r; idx++) {
            long check_bit = idx;
            long bit_mod = max_bit_count / 5;
            boolean is_zero = false;

            while (bit_mod != 0) {
                // 해당 bit 위치가 0이 반복되는 위치에 존재할 경우 (11011 11011 '00000' 11011 11011)
                if ((check_bit > bit_mod * 2) && (check_bit <= bit_mod * 3)) {
                    is_zero = true;
                    break;
                }

                // 해당 bit 위치가 0이 반복되는 위치 이후에 존재할 경우 (11011 11011 00000 '11011 11011')
                if (check_bit > bit_mod * 3) {
                    // bit 위치 조정 (ex. 1번째 bit = 16번째 bit)
                    check_bit -= bit_mod * 3;
                }

                // 해당 bit 위치가 중복이 시작되는 위치에 존재할 경우 (11011 '11011' 00000 11011 11011)
                if (check_bit > bit_mod) {
                    // bit 위치 조정 (ex. 1번째 bit = 6번째 bit)
                    check_bit -= bit_mod;
                }

                bit_mod /= 5;
            }

            if (is_zero) {
                continue;
            }

            answer++;
        }

        return answer;
    }
}