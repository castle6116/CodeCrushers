class Solution {
    boolean solution(String s) {
        int p = 0;
        int y = 0;
        boolean answer = true;
        s = s.toLowerCase();
        String[] arr = s.split("");
        for(int i = 0; i < arr.length; i++) {
            if(arr[i].equals("p")) {
                p++;
            }else if(arr[i].equals("y")) {
                y++;
            }
        }
            if(y != p) {
                return false;
            }
        return answer;
    }
}