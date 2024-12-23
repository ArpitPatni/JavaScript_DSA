/*

Print numbers from 1 to n
If number is divisible by 3 print "Fizz"
If number is divisible by 5 print "Bizz"
If number is divisble by 3 and 5 print "FizzBizz"
else print the number

*/


const fizzBizz = (numbers) => {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 3 === 0 && numbers[i] % 5 === 0) {
            console.log("FizzBizz");
        } else if (numbers[i] % 3 === 0) {
            console.log("Fizz");
        } else if (numbers[i] % 5 === 0) {
            console.log("Bizz");
        } else {
            console.log(numbers[i]);
        }
    }
};


fizzBizz([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
