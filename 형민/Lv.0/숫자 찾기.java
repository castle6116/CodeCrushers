class Solution {
    public int solution(int num, int k) {
        int answer = 0;
        String numToString = String.valueOf(num);
        String kToString = String.valueOf(k);
        answer = numToString.indexOf(kToString) +1;
        if(answer < 1) {
            return -1;
        }
        return answer;
    }
}