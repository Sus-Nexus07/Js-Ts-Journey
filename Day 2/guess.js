const secretNumber = Math.floor(Math.random() * 100) + 1;

let attempts = 0;
let won = false;

while (attempts < 7) {
    let guess = Number(prompt("Guess a number between 1 and 100"));

    attempts++;

    if (guess === secretNumber) {
        won = true;
        console.log(`Correct! You got it in ${attempts} attempt(s).`);
        break;
    } else if (guess > secretNumber) {
        console.log("Too high!");
    } else {
        console.log("Too low!");
    }
}

if (attempts === 7 && !won) {
    console.log(`Game over! The number was ${secretNumber}.`);
}

