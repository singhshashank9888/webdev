//method 1

let myString = "Hello,";
let myNumber= 42;
let result1=myString+myNumber.toString();
console.log(result1);

//method 2
let result2=`${myString}${myNumber}`;

console.log(result2);
console.log(typeof(result1));
console.log(typeof(result2));
 