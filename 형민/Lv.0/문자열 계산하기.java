class Solution {
    public int solution(String my_string) {
        String[] my_stringList = my_string.split(" ");
        int length = my_stringList.length;
        int answer = Integer.parseInt(my_stringList[0]);
        for(int i = 1; i < length; i+=2) {
            if(my_stringList[i].equals("+")) {
                answer += Integer.parseInt(my_stringList[i + 1]);
            }else {
                answer -= Integer.parseInt(my_stringList[i + 1]);
            }
        }
        return answer;
    }
}