class Solution {
    public int[] solution(String my_string) {
        int[] answer = new int[52];
        int idx = 0;
        char[] charArray = my_string.toCharArray();
        for(char c : charArray) {
            idx = c < 'a' ? c - 65 : c-71;
                answer[idx]++;
        }
        return answer;
    }
}