import java.util.*;
class Solution {
    public long solution(long n) {
        String str = String.valueOf(n);
        char[] ch = str.toCharArray();
        Arrays.sort(ch);
        StringBuilder sb = new StringBuilder();
        sb.append(ch);
        sb.reverse();
        return Long.parseLong(sb.toString());
    }
}

/*
다른사람 풀이
public class ReverseInt {
    String res = "";
    public int reverseInt(int n){
        res = "";
        Integer.toString(n).chars().sorted().forEach(c -> res = Character.valueOf((char)c) + res);
        return Integer.parseInt(res);
    }
}
*/