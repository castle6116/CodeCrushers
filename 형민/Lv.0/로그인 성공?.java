class Solution {
    public String solution(String[] id_pw, String[][] db) {
        String answer = "fail";
        for(int i = 0; i < db.length; i++) {
              if (id_pw[0].equals(db[i][0]) && id_pw[1].equals(db[i][1])) {
                answer = "login";
            }else if(id_pw[0].equals(db[i][0]) && !id_pw[1].equals(db[i][1])) {
                  return "wrong pw";
              }
        }
        return answer;
    }
}