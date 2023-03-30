//
//  프로그래머스_배열 두 배 만들기.java
//  algorithm
//
//  Created by 김형민 on 2023/02/19.
//



class Solution {
    public int[] solution(int[] numbers) {
        int[] answer = new int[numbers.length];
        
        for(int i = 0; i < numbers.length; i++){
            answer[i] = numbers[i] * 2;
        }
        
        return answer;
    }
}