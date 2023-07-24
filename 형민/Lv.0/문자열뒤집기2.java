class Solution {
    public String solution(String my_string, int s, int e) {
        String answer = "";
        String tmp = "";
        StringBuilder sum = new StringBuilder(my_string.substring(s, e+1));
            sum = sum.reverse();
        return my_string.substring(0, s) + sum + my_string.substring(e+1 , my_string.length());
    }
}