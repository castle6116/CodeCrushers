//
//  프로그래머스_배열 뒤집기.java
//  algorithm
//
//  Created by 김형민 on 2023/02/19.
//

class Solution {
    public int[] solution(int[] num_list) {
        int[] answer = new int[num_list.length];
        for(int i = 0; i < num_list.length; i++){
            answer[i] =num_list[answer.length -1 -i];
        }
        return answer;
    }
}