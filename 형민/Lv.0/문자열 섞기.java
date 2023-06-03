class Solution {
    public String solution(String str1, String str2) {
        String answer = "";
        String[] str1_list = str1.split("");
        String[] str2_list = str2.split("");
        for(int i = 0; i < str1_list.length; i++) {
            answer +=str1_list[i] + str2_list[i];
        }
        return answer;
    }
}