//Reverse a string

//1. Convert string to array(split method)
//2. Reverse the array(reverse method)
//3. Convert Array back to string(join method)

const reverseString=(str)=>str.split("").reverse().join("")

console.log(reverseString('arpit')) 