//
//  프로그래머스_머쓱이보다 키 큰 사람.java
//  algorithm
//
//  Created by 김형민 on 2023/02/19.
//



class Solution {
    public int solution(int[] array, int height) {
        int answer = 0;
        for(int i = 0; i < array.length; i++){
            if(array[i] > height){
                answer ++;
            }
        }
        return answer;
    }
}