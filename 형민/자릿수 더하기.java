//
//  프로그래머스_자릿수 더하기.java
//  algorithm
//
//  Created by 김형민 on 2023/02/25.
//

class Solution {
    public int solution(int n) {
        int answer = 0;
        while(n != 0){
            answer += n % 10;
            n /= 10;
        }
        return answer;
    }
}