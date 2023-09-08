class Solution {
    public String solution( String my_string, int[] indices ) {
        String[] strArr = my_string.split("");
        for(int index : indices){
            strArr[index] = "";
        }
        return String.join("" , strArr);
    }
}