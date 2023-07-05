class Solution {
    public int solution(int[] absolutes, boolean[] signs) {
        int sum = 0;
        for(int i = 0; i < signs.length; i++ ) {
            if(signs[i] == true) {
                sum +=absolutes[i];
            }else if (signs[i] == false) {
                sum -=absolutes[i];
            }
        }
        return sum;
    }
}


/* 다른 사람의 풀이 

class Solution {
    public int solution(int[] absolutes, boolean[] signs) {
        int answer = 0;
        for (int i=0; i<signs.length; i++)
            answer += absolutes[i] * (signs[i]? 1: -1);
        return answer;
    }
}
*/
