import java.util.*;
class Solution {
    public List solution(String[] names) {
        List<String> answer = new ArrayList<>();
        for(int i = 0; i < names.length; i++)
        if(i % 5 == 0) {
            answer.add(names[i]);            
        }
        return answer;
    }
}