class Solution {
    public int solution(int[] num_list) {
        int answer = 0;
        int Even = 0;
        int Odd = 0;
        for(int i = 0; i < num_list.length; i++) {
           if(i % 2 == 0) {
               Even += num_list[i];
           }else {
               Odd += num_list[i];
           }
        }
        if(Odd > Even) {
            return Odd;
        }else{
            return Even;
        }
    }
}