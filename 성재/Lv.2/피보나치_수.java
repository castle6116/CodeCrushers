/*
문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/12945
 */

import java.util.*;

class Solution {
    public int solution(int n) {
        int answer = 0;
        int[] fibo_nums = {0, 1};

        for (int idx = 2; idx <= n; idx++) {
            answer = (fibo_nums[0] % 1234567) + (fibo_nums[1] % 1234567);

            fibo_nums[0] = fibo_nums[1];
            fibo_nums[1] = answer;
        }

        return answer % 1234567;
    }
}