console.log("Loops");

// let a=5;
// for(let i = 0; i<10;i++){
//     console.log(a*(i+1));
// }

 
let obj ={
    name : "shashank",
    role :"programmer",
    company : "XYZ"
}

for (const key in obj){
    const element = obj[key];
    console.log(key , element)
}
for (const c  of obj) {
     
    console.log(c);
}