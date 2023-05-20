class Solution {
    public int solution(String myString, String pat) {
        int answer = 0;
        char ch = 'A';
        String st = "";
        for(int i = 0; i < myString.length(); i++) {
            if(myString.charAt(i) == ch) {
                st += "B";
            }else{
                st += "A";
            }
            
        }
        return st.contains(pat) ? 1 : 0;
    }
}