# BF
from collections import defaultdict
import collections


class Solution:
    def lengthOfLongestSubstringKDistinct(self, s: str, k: int) -> int:
        window = len(s)

        while window > 0:
            for l in range(len(s)-window+1):
                counter = collections.Counter(s[l:l+window])
                if len(counter) <= k:
                    return len(s[l:l+window])
            window -= 1

        return 0


# optimization


class Solution:
    def lengthOfLongestSubstringKDistinct(self, s: str, k: int) -> int:
        if k == 0:
            return 0

        char_dict = defaultdict(int)
        max_length = 0
        left = 0
        for r, char in enumerate(s):
            char_dict[char] += 1

            while len(char_dict) > k:
                char_dict[s[left]] -= 1
                if char_dict[s[left]] == 0:
                    del char_dict[s[left]]
                left += 1

            max_length = max(max_length, r - left + 1)

        return max_length
