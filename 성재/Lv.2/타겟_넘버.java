/*
문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/43165
 */

import java.util.*;

/*
    * DFS : 모든 노드를 탐색할 때 사용 (각각의 경로마다 특징을 저장해둬야 하는 문제일 경우 사용)
    * BFS : a -> b 노드를 최단 경로로 이동하고 싶을 때 사용

    해당 문제의 경우, 모든 경우의 수를 확인해야하기 때문에 BFS보단 DFS가 좀 더 효율적이다!
 */

class Solution {
    static int dfs(int op_result, int idx, int[] numbers, int target) {
        int dfs_result = 0;

        if (idx >= numbers.length) {
            if (target == op_result) {
                return 1;
            }

            return 0;
        }

        int plus_result = op_result + numbers[idx];
        int minus_result = op_result - numbers[idx];

        dfs_result += dfs(plus_result, idx + 1, numbers, target);
        dfs_result += dfs(minus_result, idx + 1, numbers, target);

        return dfs_result;
    }

    public int solution(int[] numbers, int target) {
        int answer = 0;

        answer += dfs (numbers[0], 1, numbers, target);
        answer += dfs (-numbers[0], 1, numbers, target);

        return answer;
    }
}