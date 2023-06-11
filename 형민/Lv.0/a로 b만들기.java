class Solution {
    public int solution(String before, String after) {
        int sum = 0;
        int sum2 = 0;
        for(int i = 0; i < before.length(); i++) {
            sum += before.charAt(i);
            sum2 += after.charAt(i);
        }
        return sum == sum2 ? 1 : 0;
    }
}