class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let noSpace = s.toLowerCase().replace(/[^\w]/g, '')
        let desired = noSpace.split(/(?:)/u).reverse().join("")
        if (noSpace === desired){
            return true
        } else {
            return false
        }
    }
}
