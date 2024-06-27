/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    sortedNums = [...nums].sort((a, b) => a - b)
    let l = 0;
    let r = nums.length - 1
    while(l < r) {
        if(l === r) break
        if(sortedNums[l] + sortedNums[r] === target){
            if(sortedNums[l] === sortedNums[r]){
                return [nums.indexOf(sortedNums[l]), nums.indexOf(sortedNums[r], nums.indexOf(sortedNums[r]) + 1)]
            }
            return [nums.indexOf(sortedNums[l]), nums.indexOf(sortedNums[r])]
        }
        if(sortedNums[l] + sortedNums[r] > target){
            r--
        } else{
            l++
        }
    }
};
const nums = [2,7,11,5,5] 
const target = 10
console.log(twoSum(nums, target))