class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let temp = []

        for (let c of s){
            if (c === '(' || c === '{' || c === '['){
                temp.push(c)
            } else if (c === ')' || c === '}' || c === ']'){
                if (temp.length === 0){
                    return false
                }
                let top = temp[temp.length - 1]
                if ((c === ')' && top !== '(') ||
                (c === '}' && top !== '{') ||
                (c === ']' && top !== '[')){
                    return false
                }
                temp.pop()
            }
        }
        return temp.length === 0
    }
}
