class Solution {
    public int solution(int[] num_list) {
        String oddSum = "";
        String evenSum = "";
        for(int i = 0; i < num_list.length; i++) {
            if(num_list[i] % 2 == 0 ) {
                oddSum += num_list[i];
            }else {
                evenSum += num_list[i];
            }
        }    
        return Integer.parseInt(oddSum) + Integer.parseInt(evenSum);
    }
}