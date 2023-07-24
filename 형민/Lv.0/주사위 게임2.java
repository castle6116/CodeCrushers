class Solution {
    public int solution(int a, int b, int c) {
        int answer = 0;
        
        if(a != b && b != c && a != c) {
            answer = a+b+c;
        }else if(a == b && b == c && a == c) {
             double result1 = Math.pow(a , 2);
             double result2 = Math.pow(b , 2);
             double result3 = Math.pow(c , 2);
             double sum = result1 + result2+ result3;
            
             double result4 = Math.pow(a , 3);
             double result5 = Math.pow(b , 3);
             double result6 = Math.pow(c , 3);
             double sum2 = result4 + result5+ result6;
             answer = (a + b + c) * (int) sum * (int) sum2;
            
        }
        else{
            double result1 = Math.pow(a , 2);
            double result2 = Math.pow(b , 2);
            double result3 = Math.pow(c , 2);
            double sum = result1 + result2+ result3;
            answer = (a+b+c) * (int) sum;
        }
        return answer;
    }
}