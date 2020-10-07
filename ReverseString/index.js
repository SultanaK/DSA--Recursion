const reverseString = (string) => {
    if (string.length === 1) {
        return string;
    } else {
        let newString = string[string.length-1]
        return newString + reverseString(string.slice(0,-1)) 
    }
    
}
let result = reverseString('abcd')
console.log(result)