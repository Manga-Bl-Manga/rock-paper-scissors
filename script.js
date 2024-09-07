console.log("hello brave!");
let humanChoise ;
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
    let manyka = false;
    
    

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
    if (playerWon && !draw && !manyka){
        console.log("You won!");
        document.getElementsByClassName("result")[0].innerHTML = "You won!";
    }

    if (!playerWon && !draw && !manyka){
        console.log("You lost! ( 3shan 5awal :) )");
        document.getElementsByClassName("result")[0].innerHTML = "You lost! ( 3shan 5awal :) )"
    }


    if (draw){
        console.log("Draw!");
        document.getElementsByClassName("result")[0].innerHTML = "Draw!";
    }
    // manages Aly :(  DELETE DELETE DELETE ---------------------------------

    if (humanChoise !== "ROCK" && humanChoise !== "PAPER" && humanChoise !== "SCISSORS") {
        manyka = true;
    }
    

    if (manyka){
        console.log("اختار عدل يا خول")
    }

}

