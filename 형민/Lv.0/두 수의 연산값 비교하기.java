class Solution {
    public int solution(int a, int b) {
        int answer = 0;
        int Plus = 0;
        int Multiple = 0;
        Plus = Integer.parseInt(Integer.toString(a)+Integer.toString(b));
        Multiple = 2 * a * b;
        
        
            
        return Math.max(Plus,Multiple);
}
}