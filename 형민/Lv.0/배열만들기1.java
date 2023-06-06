import java.util.*;
class Solution {
    public List solution(int n, int k) {
        ArrayList arrlist = new ArrayList();
        for(int i = 1; i*k <= n; i++) {
            arrlist.add(i*k);
        }
        return arrlist;
    }
}