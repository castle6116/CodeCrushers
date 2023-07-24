import java.util.*;
class Solution {
    public List solution(int[] arr, int divisor) {
        List<Integer> answer = new ArrayList<>();
      
        for(int i = 0; i < arr.length; i++){
            if(arr[i] % divisor == 0){
                answer.add(arr[i]);
                Collections.sort(answer);
            }
    }
          if(answer.size() < 1) {
             answer.add(-1);
            return answer;
        }
        return answer;
    }
}

/*
다른사람 풀이

import java.util.Arrays;

class Divisible {
    public int[] divisible(int[] array, int divisor) {
        return Arrays.stream(array).filter(factor ->
        factor % divisor == 0).toArray();}
    // 아래는 테스트로 출력해 보기 위한 코드입니다.
    public static void main(String[] args) {
        Divisible div = new Divisible();
        int[] array = {5, 9, 7, 10};
        System.out.println( Arrays.toString( div.divisible(array, 5) ));
    }
}
*/