import java.util.*;
class Solution {
    public List solution(int[] num_list, int n) {
        List<Integer> list = new ArrayList<>();
        int[] sum_list = new int[n];
        int[] sum_list2 = new int[(num_list.length)];
        for(int i = n; i < num_list.length; i++) {
            sum_list2[i] = num_list[i];
            list.add(sum_list2[i]);
        }
        for(int i = 0; i < n; i++) {
            sum_list[i] = num_list[i];
            list.add(sum_list[i]);
        }
        return list;
    }
}