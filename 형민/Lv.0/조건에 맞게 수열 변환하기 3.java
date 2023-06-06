class Solution {
    public int[] solution(int[] arr, int k) {
        int[] answer = arr;
        for(int i = 0; i < arr.length; i++ ) { 
            if( k % 2 == 0 ) { 
            answer[i] += k;
            }else if(k % 2 == 1) {
                answer[i] *= k;
            }
        }
        return answer;
    }
}