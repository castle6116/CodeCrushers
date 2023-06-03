class Solution {
    public int solution(String my_string, String is_prefix) {
        int answer = 0;
        if(is_prefix.length() > my_string.length()) {
        answer = 0;
        } else {
            if(my_string.substring(0,is_prefix.length()).equals(is_prefix)) {
                answer = 1;
            }
        }
        return answer;
    }
}