class Solution {
    public int solution(String number) {
        int answer = 0;
        String[] temp = number.split("");
        for(int i = 0; i < temp.length; i++) {
            answer += Integer.parseInt(temp[i]);
        }
        answer = answer % 9;
        return answer;
    }
}