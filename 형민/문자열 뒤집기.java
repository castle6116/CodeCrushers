//
//  문자열 뒤집기_배열 두 배 만들기.java
//  algorithm
//
//  Created by 김형민 on 2023/02/19.
//

import java.lang.*;
class Solution {
    public String solution(String my_string) {
        String answer = "";
        StringBuilder sb = new StringBuilder(my_string);
        answer = sb.reverse().toString();
        return answer;
    }
}