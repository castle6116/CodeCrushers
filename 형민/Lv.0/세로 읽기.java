class Solution {
    public String solution(String my_string, int m, int c) {
        String answer = "";
        char[] temp = my_string.toCharArray();
        for(int i = c; i <= temp.length; i+=m){
        answer += String.valueOf(temp[i - 1]);
        }
        return answer;
    }
} 