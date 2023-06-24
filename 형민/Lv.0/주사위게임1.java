class Solution {
    public int solution(int a, int b) {
        int answer = 0;
        int result = (int)Math.pow(a,2) +(int)Math.pow(b,2);
        if(a % 2 == 1 && b % 2 == 1) {
            answer = result;
        }else if(a % 2 == 1 || b % 2 == 1){
            answer =  2 * (a + b);
        }
        else{
            answer = Math.abs(a-b);
        }
        return answer;
    }
}