console.log("hello brave!");
let humanChoise ;
let gl_H_score = 0;
let gl_C_score = 0;
function getComputerChoise()
{
    let computerChoise;
    let random = Math.random();
    console.log("the random variable in func. is " + random);
    if (random <= 0.33)return "rock";
    else if (random <= 0.66 && random > 0.33)return "paper";
    else return "scissors";
}

console.log("test: " + getComputerChoise());

function getHumanChoice(){
    //let humanChoise = prompt("Choose and type: Rock | Paper | Scissors");
    humanChoise = humanChoise.toUpperCase();
    return humanChoise;
}

function setRock(){
    humanChoise = "ROCK"
}

function setPaper() {
    humanChoise = "PAPER";
}

function setScissors() {
    humanChoise = "SCISSORS";
}

function playRound(){
    let computerChoise = getComputerChoise();
    //let humanChoise = getHumanChoice();
    computerChoise = computerChoise.toUpperCase();
    console.log("The computer picked: " + computerChoise + " and the human",
        " picked: " + humanChoise);
    let playerWon = false;
    let draw = false;
    let manga = false;
    
    

    // all the cases
    if (humanChoise == "ROCK" && computerChoise == "SCISSORS"){
        playerWon = true;
    }
    else if (humanChoise == "PAPER" && computerChoise == "ROCK"){
        playerWon = true;
    }
    else if (humanChoise == "SCISSORS" && computerChoise == "PAPER"){
        playerWon = true;
    }
    
    // manages draws
    if (humanChoise == computerChoise){
        draw = true;
    }

    // handles winning and losing
    if (playerWon && !draw && !manga){
        gl_H_score++;
        console.log("You won!");
        document.getElementsByClassName("result")[0].textContent = "You won! - " + gl_H_score + ':' + gl_C_score;
    }

    if (!playerWon && !draw && !manga){
        gl_C_score++;
        console.log("You lost! ;) - " + gl_H_score + ':' + gl_C_score);
        document.getElementsByClassName("result")[0].textContent = "You lost! - " + gl_H_score + ':' + gl_C_score;

        
    }


    if (draw){
        console.log("Draw!");
        document.getElementsByClassName("result")[0].textContent = "Draw! - " + gl_H_score + ':' + gl_C_score;
    }
    // manages manga

    if (humanChoise !== "ROCK" && humanChoise !== "PAPER" && humanChoise !== "SCISSORS") {
        manga = true;
    }
    

    if (manga){
        console.log("<3 اختار عدل يا قمر")
    }

}

function playGame(){
    for (let i = 5; i > 0; i--){
        playRound();
        console.log("round " + i + " has been played");
    }
}



