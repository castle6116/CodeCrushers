# Time Limit Exceeded
class Solution:
    def find132pattern(self, nums: List[int]) -> bool:
        if len(nums) < 3:
            return False
        left, right = 0, len(nums) - 1

        while left < right:
            for left in range(len(nums)-1):
                for right in range(len(nums)-1, 0, -1):
                    for mid in range(left+1, right):
                        if nums[left] < nums[right] < nums[mid]:
                            return True
        return False

# With stack - mono decreasing order, O(n)


class Solution:
    def find132pattern(self, nums: list[int]) -> bool:
        if len(nums) < 3:
            return False

        n = len(nums)

        min_list = [nums[0]] * n
        for i in range(1, n):
            min_list[i] = min(min_list[i-1], nums[i])
        print(min_list)
        stack = []

        for j in range(n-1, -1, -1):
            if nums[j] > min_list[j]:
                while stack and stack[-1] <= min_list[j]:
                    stack.pop()
                if stack and stack[-1] < nums[j]:
                    return True
                stack.append(nums[j])

        return False
