class Solution {
    public int solution(int n) {
        int slice = 6;
        int i = 1;
        while(true) {
            if(slice * i % n == 0) {
                return i;
            }
            i++;
        }
    }
}