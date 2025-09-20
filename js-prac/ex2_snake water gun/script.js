
var Player1;
let Player2; //Player 2 is computer
let Player1_c = 0;
let Player2_c = 0;

let n = 2;

do {

    let x = Math.random() * 100;
    if (x > 0 && x <= 33) {
        Player2 = "R";
    }
    else if (x > 33 && x <= 67) {
        Player2 = "P";;
    }
    else {
        Player2 = "S"
    }
    // console.log(Player2)

    Player1 = prompt("Enter Rock,paper or scissor , R P S  only").toUpperCase();
    // console.log(Player1);

    if (Player1 == "R" && Player2 == "P") {
        alert("Player 2 won")
        Player2_c++;
    }
    else if (Player1 == "P" && Player2 == "R") {
        alert("Player 1 won")
        Player1_c++;
    }
    else if (Player1 == "S" && Player2 == "R") {
        alert("Player 2 won")
        Player2_c++;
    }
    else if (Player1 == "R" && Player2 == "S") {
        alert("Player 1 won")
        Player1_c++;
    }
    else if (Player1 == "P" && Player2 == "S") {
        alert("Player 2 won")
        Player2_c++;
    }
    else if (Player1 == "S" && Player2 == "P") {

        alert("Player 1 won")
        Player1_c++;
    }
    else if (Player1 == Player2) {
        alert("Draw")
    }
    n--;
} while (n != 0 )

if (Player1_c > Player2_c) {
    alert("player 1 won overall")
}
else {
   alert("player 2 won overall")
}