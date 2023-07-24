class Solution {
    public int solution(String binomial) {
        int answer = 0;
        String[] binomialarr = binomial.split(" ");
        if(binomialarr[1].equals("+")) {
          answer = Integer.parseInt(binomialarr[0]) + Integer.parseInt(binomialarr[2]);  
        }
        if(binomialarr[1].equals("-")) {
            answer = Integer.parseInt(binomialarr[0]) - Integer.parseInt(binomialarr[2]);  
        }
         if(binomialarr[1].equals("*")) {
            answer = Integer.parseInt(binomialarr[0]) * Integer.parseInt(binomialarr[2]);  
        }
        return answer;
    }
}