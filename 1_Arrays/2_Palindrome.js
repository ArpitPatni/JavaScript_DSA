const checkPalindrome=(str)=>{
    const reverseStr=str.split("").reverse().join("");
    return reverseStr===str;
}

console.log(checkPalindrome("level"))