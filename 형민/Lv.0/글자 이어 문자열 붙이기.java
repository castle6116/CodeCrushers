class Solution {
    public String solution(String my_string, int[] index_list) {
        String answer = "";
        char target = ' ';
        for(int i = 0; i < index_list.length; i++){
            target = my_string.charAt(index_list[i]);
            answer += String.valueOf(target);
        }
        return answer;
    }
}