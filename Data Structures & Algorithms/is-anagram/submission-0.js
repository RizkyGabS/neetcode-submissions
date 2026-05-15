class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length === t.length){
            let freq = {}
            for (let i=0; i<s.length; i++){
                let char = s.charAt(i)
                if(freq[char]){
                    freq[char]++
                } else {
                    freq[char] = 1
                }
            }
            console.log(freq)
            let freq2 = {}
            for (let i=0; i<s.length; i++){
                let char = t.charAt(i)
                if(freq2[char]){
                    freq2[char]++
                } else {
                    freq2[char] = 1
                }
            }
            for (let key in freq){
                if (freq[key] !== freq2[key]){
                    return false
                }
            }
            return true
        } else {
            return false
        }
    }
}
