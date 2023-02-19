//
//  프로그래머스_문자 반복 출력하기.java
//  algorithm
//
//  Created by 김형민 on 2023/02/19.
//
// 풀다 느낀점 : 기초의 부족함을 많이 느꼈다, 기본기의 탄탄함이 필요하다.


import java.util.Arrays;
class Solution {
    public String solution(String my_string, int n) {
        String answer = "";
        char[] arr = my_string.toCharArray();
        
        for(int i = 0; i < arr.length; i++){
            for(int j = 0; j < n; j++) {
                answer += String.valueOf(arr[i]);     
            }
        }
        return answer;
    }
}