/*
문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/12981
 */

import java.util.*;

class Solution {
    public int[] solution(int n, String[] words) {
        int[] answer = new int[2];
        int duplicate_word_idx = 0;

        Hashtable<String, Integer> words_hash = new Hashtable<String, Integer>();
        String prev_word = null;

        for (int word_idx = 0; word_idx < words.length; word_idx++) {
            if (!words_hash.isEmpty()) {
                // 1. 이전에 동일한 단어가 존재하는지 검색
                if (words_hash.containsKey(words[word_idx])) {
                    duplicate_word_idx = word_idx;
                    break;
                }

                // 2. 직전 단어의 마지막 글자와 현재 단어의 첫번째 글자가 동일한지 확인
                if (prev_word.charAt(prev_word.length() - 1) != words[word_idx].charAt(0)) {
                    duplicate_word_idx = word_idx;
                    break;
                }
            }

            words_hash.put(words[word_idx], word_idx);
            prev_word = words[word_idx];
        }

        if (duplicate_word_idx != 0) {
            answer[0] = duplicate_word_idx % n + 1;
            answer[1] = duplicate_word_idx / n + 1;
        }

        return answer;
    }
}

/*
[HashTable vs HashMap]
* HashTable : thread-safe, key not nullable
* HashMap : no thread-safe,  key nullable, hash 충돌이 적음

=> HashMap을 적극적으로 사용하자!!
 */