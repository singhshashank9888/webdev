//Arrays 
// let arr=[1,2,3,4,5,67,45]

// console.log(arr.toString())
// console.log(typeof(arr));

// console.log(arr.join("-"))
// console.log(arr.pop())
// console.log(arr.toString())

// console.log(arr);
// arr.push(69)
// console.log(arr);
// console.log(arr.length);


// console.log(arr.shift())
// console.log(arr.unshift(22))
// console.log(arr);
// delete arr[0];
// console.log(arr.length);
// console.log(arr);

// let arr1 = [3, 44, 22, 33]
// console.log(arr1.sort());
// let arr1 = [3, 44, 22, 33]
// let compare = (a, b) => {
//     return a - b;
// }

// arr1.sort(compare);
// console.log(arr1);

// let arr2 = [3, 44, 22, 33];
// arr2.splice(1,2,1020);
// console.log(arr2);

//looping through an array

const a = [1,2,3]
//classical for loop
// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     console.log(element)
    
// }
// //for each
// a.forEach((element) => {
//     console.log(element)
// })

// //arary.from
// let name = "shashank"

// let arr= Array.from(name);
// console.log(arr);

// //For of 
// console.log("For of loop \n \n\ \n");
// let num= [2,3,1,4,5]
// for (let item of num ){
//     console.log(item);
// }
// console.log("\n")
// //for in 
// for (const i in num) {
//    console.log(num[i])
// }
// console.log("\n Map filter reduce");
// //map 

// const arr1=[1,2,3];
// let x =arr1.map((value,index,array)=>{
//     console.log(value,index,array)
//     return value+1;
// })
// console.log(x);
// console.log("\nFilter");

// //Filter 
// let arr2= [45,33,44,9,22]
// let x1= arr2.filter((a) =>{
//     return a<10;
// })
// console.log(x1);
// console.log(x1,arr2); //original array doesn't changes

// //Reduce

// let arr3=[1,2,3,5,2,1]

// const add = (h1,h2) =>{
//     return h1+h2;
// }
// let sum=arr3.reduce(add);
// console.log(sum);