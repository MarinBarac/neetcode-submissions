class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const complements: Record<number, number> = {};

        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];

            if (complements[num] !== undefined) {
                const indexOfComplement = nums.indexOf(complements[num]);

                return [i, indexOfComplement];
            } else {
                const complement = target - num;
                complements[complement] = num;
            }
        }

        return [0, 0]
    }
}
