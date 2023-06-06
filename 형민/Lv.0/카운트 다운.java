class Solution {
    public int[] solution(int start, int end) {
        int[] answer = new int[start - end + 1];
        for(int i = 0; i < answer.length; i++) {
            answer[i] = i + end;
        }
        int[] reverseArr = new int[answer.length];
        for(int i = answer.length -1, j = 0; i >= 0; i--, j++) {
            reverseArr[j] = answer[i];
        }
        return reverseArr;
    }
}