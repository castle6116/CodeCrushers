//
//  프로그래머스_짝수는 싫어요.java
//  algorithm
//
//  Created by 김형민 on 2023/02/25.
//

import java.util.*;
class Solution {
    public int[] solution(int n) {
        ArrayList<Integer> arrList = new ArrayList<>();
        for(int i = 0; i <= n; i++){
            if(i %2 ==1){
                arrList.add(i);
            }
        }
        int[] primitive = arrList.stream()
                .mapToInt(Integer::intValue)
                .toArray();
        
        return primitive;
    }
}