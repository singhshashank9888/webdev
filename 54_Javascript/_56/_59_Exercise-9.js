//Enter 1 for addition , 2 for multiplication ,3 for  subtraction and 4 for division.

console.log("This is a faulty calculator");

function calculate(operator, a, b) {
    let random = Math.random();

    if (operator == 1) {
        let add = (a, b) => {
            if(random<0.1){
                return a-b;
            }
            else{
                return a+b;
            }
        }
        console.log(add(a,b));
        }
    

    else if(operator == 2) {
        let subtract = (a, b) => {
            if (random < 0.1) {
                return a - b;
            }
            else {
                return a - b;
            }
        }
    }

    else if (operator == 1) {
        let add = (a, b) => {
            if (random > 0.1) {
                return a + b;
            }
            else {
                return a - b;
            }
        }
    }
    else {
        let add = (a, b) => {
            if (random > 0.1) {
                return a + b;
            }
            else {
                return a - b;
            }
        }
    }
}