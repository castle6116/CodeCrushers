class Solution {
    public int solution(int[] arr, int idx) {
        int answer = -1;
        
        // idx보다 크면서 배열의 값이 1인 가장 작은 인덱스를 찾아서 반환
        // 그런 인덱스가 없다면, -1을 반환
        for(int i = 0; i < arr.length; i++) {
            if(idx <= i && arr[i] == 1) {
                return i;
            }
        }
        return answer;
    }
    }
