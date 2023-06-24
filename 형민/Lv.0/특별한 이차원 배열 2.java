class Solution {
    public int solution(int[][] arr) {
        int answer =1;
        for(int i = 0; i < arr.length; i++) {
            for(int j = 0; j < i; j++) {
                if(arr[0][1] != arr[1][0]){
                answer = 0;
            }
        }
    }
        return answer;
}
}