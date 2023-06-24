class Solution {
    public int[] solution(String myString) {
        String[] arr = myString.split("x", -1);
        int[] array = new int[arr.length];
        for(int i = 0; i < arr.length; i++) {
            array[i] = (arr[i].length());
        }
        return array;
    }
}