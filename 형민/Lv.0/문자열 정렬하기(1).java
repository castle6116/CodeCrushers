import java.util.*;
class Solution {
    public int[] solution(String my_string) {
        String restr = my_string.replaceAll("[^0-9]","");
        String[] arr = restr.split("");
        Arrays.sort(arr);
        int[] answer = new int [restr.length()];
        for(int i = 0; i < restr.length(); i++) {
            answer[i] = Integer.parseInt(arr[i]);
        }
        return answer;
    }
}