//
//  프로그래머스_배열 원소의 길이.java
//  algorithm
//
//  Created by 김형민 on 2023/02/19.
//


class Solution {
    public int[] solution(String[] strlist) {
        int[] answer = new int[strlist.length];
        for(int i = 0; i < strlist.length; i++){
            answer[i] = strlist[i].length();
        }
        return answer;
    }
}