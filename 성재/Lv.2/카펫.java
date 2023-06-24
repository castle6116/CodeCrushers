/*
문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/42842
 */

import java.util.*;

class Solution {
    public int[] solution(int brown, int yellow) {
        int[] answer = new int[2];
        int total_carpet = brown + yellow;

        for (int width = 3; width <= Math.sqrt(total_carpet); width++) {
            if ((total_carpet % width == 0) && (answer[1] < width)) {
                if ((width - 2) * (total_carpet / width - 2) == yellow) {
                    answer[1] = width;
                    answer[0] = total_carpet / answer[1];
                }
            }
        }

        return answer;
    }
}

/*
[약수 계산]
1. N의 약수를 구할 때는, 1부터 N의 제곱근 까지의 수만 0으로 나누어 떨어지는지 확인
2. N을 1에서 구한 수로 나누게 되면 모든 약수들을 구할 수 있다!
 */
