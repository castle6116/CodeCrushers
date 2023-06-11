import java.util.*;
class Solution {
    public List solution(int n, int[] numlist) {
        List arr = new ArrayList<Integer>();
        for(int i =0; i < numlist.length; i++) {
            if(numlist[i] % n == 0) {
                arr.add(numlist[i]);
            }
        }
        return arr;
    }
}