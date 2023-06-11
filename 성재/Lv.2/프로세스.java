/*
문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/42587
 */

import java.util.*;

class Solution {
    public int solution(int[] priorities, int location) {
        int answer = 0;

        Queue<Integer> excute_wait_queue = new LinkedList<>();

        // priorities의 index를 순서대로 queue에 저장
        for (int idx = 0; idx < priorities.length; idx++) {
            excute_wait_queue.offer(idx);
        }

        // 실행 대기 큐 순회
        while (!excute_wait_queue.isEmpty()) {
            int process = excute_wait_queue.poll();
            int high_prior = Arrays.stream(priorities).max().getAsInt();

            // 해당 프로세스의 우선순위 체크
            if (priorities[process] == high_prior) {     // 우선순위가 가장 높을 경우
                answer++;

                // 실행한 프로세스의 우선순위를 0으로 변경
                priorities[process] = 0;

                // 확인할 프로세스가 실행되었을 경우, break
                if (process == location) {
                    break;
                }

            } else {
                // 우선순위 대기 큐 마지막에 put
                excute_wait_queue.offer(process);

            }
        }

        return answer;
    }
}