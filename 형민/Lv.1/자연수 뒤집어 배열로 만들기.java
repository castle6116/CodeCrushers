import java.util.*;
class Solution {
    public List solution(long n) {
        String str = String.valueOf(n);
        char[] ch = str.toCharArray();
        StringBuilder sb = new StringBuilder(new String(ch));
        sb.reverse();
        String sbString = sb.toString();
        String[] arr = sbString.split("");
        List<Integer> list = new ArrayList<>();
        
        for(String num : arr) {
            list.add(Integer.parseInt(num));
        }
        return list;
    }
}

/*
다른 사람의 풀이
import java.util.stream.IntStream;

class Solution {
    public int[] solution(long n) {
        return new StringBuilder().append(n).reverse().chars().map(Character::getNumericValue).toArray();
    }
}
*/
