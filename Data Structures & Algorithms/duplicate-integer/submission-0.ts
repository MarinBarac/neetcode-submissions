class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const numsMap: Record<number, number> = {};

        for(let i = 0; i < nums.length; i++) {
            const num = nums[i];

            if(!!numsMap[num]) {
                return true;
            } else {
                numsMap[num] = 1;
            }
        }

        return false
    }
}
