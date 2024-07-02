/**
 * @param {string} s
 * @return {number}
 */
const s = "aabaab!bb"
var lengthOfLongestSubstring = function(s) {
    let set = new Set();
    let left = 0;
    let max = 0;
    for (let i = 0; i <= s.length - 1; i++) {

        while(set.has(s[i])) {
            set.delete(s[left])
            left++;
        }
        set.add(s[i]);
        max = max > set.size ? max : set.size
    }
    return(max)
};
console.log(lengthOfLongestSubstring(s))