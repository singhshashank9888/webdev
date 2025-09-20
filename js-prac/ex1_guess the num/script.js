let num = (Number.parseInt(Math.random() * 100))

console.log(num)
var gn;
let attempts = 0;
gn = Number.parseInt(prompt("Enter a number : "));

while (num != gn) {


    if (num > gn) {
        gn = prompt("increase the guess")
        attempts++
    }
    else if (num < gn) {
        gn = prompt("decrease the guess")
        attempts++
    }


}
console.log("Correct guess in " + attempts + " attempts " + " with score " + (100 - attempts))


