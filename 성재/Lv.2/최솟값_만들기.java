/*
문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/12941
 */

import java.util.*;

class Solution
{
    public int solution(int []A, int []B)
    {
        int answer = 0;

        PriorityQueue<Integer> a_queue = new PriorityQueue<Integer>();
        PriorityQueue<Integer> b_queue = new PriorityQueue<Integer>(Collections.reverseOrder());

        for (int idx = 0; idx < B.length; idx++) {
            // offer 사용하면 효율성 테스트에서 실패한다... -> 이유를 잘 모르겠다?
            a_queue.add(A[idx]);
            b_queue.add(B[idx]);
        }

        while (!a_queue.isEmpty() || !b_queue.isEmpty()) {
            answer += a_queue.poll() * b_queue.poll();
        }

        return answer;
    }
}

/*
주의사항 1. Array.sort 사용하면 효율성 테스트에서 실패
 */