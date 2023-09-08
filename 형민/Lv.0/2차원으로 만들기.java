class Solution {
    public int[][] solution(int[] num_list, int n) {
        int[][] answer = new int [num_list.length/n][n]; 
        int idx = 0;
        for(int i = 0; i < answer.length; i++) { 
            int[] temp = new int[n];.
            for(int k = 0; k < n; k++) {
                temp[k] = num_list[idx]; 
                idx++;  
            }
            answer[i] = temp;
        }
        return answer;
    }
} 