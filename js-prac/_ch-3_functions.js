//simple sum returning function 

// const sum = (a,b)=>{
//     let result = a+b;
//     return result;
// }
// let result1=sum(2,2);
// console.log("sum is " + result1);

// q no.1

// let marks={
//     harry: 98,
//     rohan : 70,
//     aakash : 7

// }
  
// for (let i = 0; i < Object.keys(marks).length; i++) {
//     console.log("The marks of " + Object.keys(marks)[i] + " is " + marks[Object.keys(marks)[i]] )
     
// }

//q no.2
// for (const key in marks) {
//    console.log("The marks of  " + key + " " +  marks[key])
// } 

//qno.3
// let correct_num= 5; 
// let i ;

// while (i!=correct_num) {
//     console.log("Try again")
//    i= prompt("Enter a number");
// }
// do {
//     console.log("Try again")
//     i= prompt("Enter a number");
// } while (i!=correct_num);
// console.log("COrrect number")

// qno.5

// function  mean(a,b,c,d,e) {
//     let mean = (a+b+c+d+e)/5;
//     return mean;
// }

const mean = (a,b,c,d,e) =>{
    return (a+b+c+d+e)/5
}
console.log("The result is ", mean(1,1,1,1))