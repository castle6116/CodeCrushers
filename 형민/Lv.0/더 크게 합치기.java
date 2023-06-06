class Solution {
    public int solution(int a, int b) {
        int answer = 0;
        int AplusBsum = Integer.parseInt(Integer.toString(a)+Integer.toString(b));
        int BplusAsum = Integer.parseInt(Integer.toString(b)+Integer.toString(a));
        
        return Math.max(AplusBsum,BplusAsum);
        
        

        
    }
}