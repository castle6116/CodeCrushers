class Solution:
    def minOperations(self, nums: List[int]) -> int:
        length = len(nums)
        nums = sorted((set(nums)))
        res = length
        r = 0
        for l in range(len(nums)):
            # nums[l], nums[l] + length - 1
            while r < len(nums) and nums[r] <= nums[l] + length - 1:
                r += 1
            window = r - l
            res = min(res, length - window)

        return res
