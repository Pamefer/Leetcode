class Solution(object):
    def twoSum(self, nums, target):
        hashTable={}
        print('a')
        for index, num in enumerate(nums):
            resta=target-num
            if resta in hashTable:
                print('++',[hashTable[resta],index] )
                return [hashTable[resta],index] 
            hashTable[num]=index
            print('--',hashTable)

        return []