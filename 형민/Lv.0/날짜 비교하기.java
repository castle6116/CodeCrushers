class Solution {
    public int solution(int[] data1, int[] data2) {
        int answer = 0;
        if(data1[0] == data2[0] && data1[1] == data2[1] && data1[2] < data2[2]){
            answer = 1;
        }else if(data1[0] == data2[0] && data1[1] < data2[1]) {
            answer = 1;
        }else if(data1[0] < data2[0]) {
            answer = 1;
        }
        return answer;
    }
}