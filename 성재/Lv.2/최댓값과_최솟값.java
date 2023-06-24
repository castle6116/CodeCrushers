/*
문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/12939
 */

import java.util.*;

class Solution {
    public int solution(int[] priorities, int location) {
        String[] s_arr = s.split(" ");
        int max_num = Arrays.stream(s_arr)
                .mapToInt(Integer::parseInt)
                .max()
                .getAsInt();

        int min_num = Arrays.stream(s_arr)
                .mapToInt(Integer::parseInt)
                .min()
                .getAsInt();

        return min_num + " " + max_num;
    }
}