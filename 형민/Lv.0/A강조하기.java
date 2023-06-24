class Solution {
    public String solution(String myString) {
        myString = myString.toLowerCase();
        if(myString.contains("a")){
            myString = myString.replace("a", "A");
        }
        return myString;
    }
}