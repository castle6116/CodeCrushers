import java.util.*;
class Solution {
    public List solution(long x, long n) {
        List<Long> list = new ArrayList(); 
        for(int i = 1; i < n + 1; i++ ) { 
            list.add(x * i);
        }
        return list;
    }
}