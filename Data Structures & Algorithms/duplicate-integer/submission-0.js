class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        for (let i=0; i<nums.length; i++){
            console.log(nums[i])
            for(let j=i+1; j<nums.length; j++){
                console.log('j:',nums[j])
                if (nums[i] === nums[j]){
                    return true
                }
            }
        }
        return false
    }
}
