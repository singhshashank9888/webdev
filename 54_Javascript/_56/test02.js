let a = 23;
let b = 12;
let c = Math.random();
let div = a / b;
let sub = a - b;
let add = a + b;
let multiply = a * b;
let expo = a ** b;
function faulty() {
    if (c > 0.1) {
        console.log("division: ", div);
        console.log("addition: ", add);
        console.log("subtract: ", sub);
        console.log("multiply: ", multiply);
        console.log("exponational: ", expo);
    }
    else if (c < 0.1) {
        console.log("suntract: ", multiply);
        console.log("exponational ", sub);
        console.log("division: ", expo);
        console.log("add: ", div);
        console.log("mutiply: ", add);
    }
}
faulty()