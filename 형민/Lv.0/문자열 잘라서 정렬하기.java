import java.util.*;
class Solution {
    public List solution(String myString) {
        String[] answer = myString.split("x");
        Arrays.sort(answer);  
        List<String> list =new ArrayList<>(Arrays.asList(answer));
        list.removeAll(Arrays.asList("", null));
        return list;
    }
}