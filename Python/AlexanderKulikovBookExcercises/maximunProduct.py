def max_product(nums):
    n = len(nums)
    max_product=0
    for first in range(n):
        print("--first",first)
        for second in range(first+ 1, n):
            print("--second",second)
            max_product = max(max_product, nums[first]* nums[second])
            print("--max_product",max_product)

    return max_product
if __name__== "__main__":
    _ = int(input())
    input_numbers = list(map(int, input().split()))
    print(max_product(input_numbers))