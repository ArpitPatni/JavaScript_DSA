//Reverse the integer

//1. Convert number to string
//2. Convert string to array
//3. Reverse the array
//4. Convert array back to string
//5. Convert string to number
//6  Return the number

const reverseInteger = (num) => {
    const sign = Math.sign(num); // Preserve the sign
    const reversedNumber = Math.abs(num) // Remove sign for reversal
        .toString()
        .split("")
        .reverse()
        .join("");
    return sign * parseInt(reversedNumber, 10); // Add sign back and specify base 10
};

console.log(reverseInteger(123));   // 321
console.log(reverseInteger(-123));  // -321
console.log(reverseInteger(0));     // 0
