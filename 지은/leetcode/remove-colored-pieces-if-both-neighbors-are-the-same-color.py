import collections


class Solution:
    def winnerOfGame(self, colors: str) -> bool:
        if len(colors) < 3:
            return False
        dic = collections.defaultdict(int)

        left = 0
        while left+2 < len(colors):
            counter = collections.Counter(colors[left:left+3])
            if len(counter) == 1:
                dic[colors[left+1]] += 1
            left += 1

        return True if dic["A"] > dic["B"] else False

# solution 2


class Solution:
    def winnerOfGame(self, colors: str) -> bool:
        alice = 0
        bob = 0

        for i in range(1, len(colors) - 1):
            if colors[i - 1] == colors[i] == colors[i + 1]:
                if colors[i] == "A":
                    alice += 1
                else:
                    bob += 1

        return alice - bob >= 1
