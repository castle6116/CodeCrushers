/*
문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/12911
 */

import java.util.*;

class Solution {
    public int solution(int n) {
        int answer = n + 1;

        while (Integer.bitCount(n) != Integer.bitCount(answer)) {
            answer++;
        }

        return answer;
    }
}