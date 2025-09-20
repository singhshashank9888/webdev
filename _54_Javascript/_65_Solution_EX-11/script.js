console.log("This is a factorial calculator")

let a;
prompt("Enter a number ", a);
function fact(a) {
    if (a<0) {
        console.log("Factorial is not defined for negative numbers");

    }
    else if(a==0){
        console.log("1");
        
    }
    for (let i = 0; i < a; i++) {
        a = a - 1;
        const element = a * fact(a);     
        
    }
    console.log(element);
}
