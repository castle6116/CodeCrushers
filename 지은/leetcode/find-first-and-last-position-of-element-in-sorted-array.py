class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        def binary_search(find_first=True):
            low, high = 0, len(nums) - 1
            ans = -1

            while low <= high:
                mid = (low + high) // 2
                if nums[mid] == target:
                    ans = mid
                    if find_first:
                        high = mid - 1
                    else:
                        low = mid + 1
                elif nums[mid] < target:
                    low = mid + 1
                else:
                    high = mid - 1

            return ans

        first = binary_search(find_first=True)
        last = binary_search(find_first=False)

        return [first, last]
