function computerPick() {
    rockPaperScissors = ["rock", "paper", "scissors"]
    let i = Math.floor(Math.random()*3)
    return[i];
}

function Game(UserInput) {
    let UserAnswer = UserInput.upper()
    let ComputerAnswer = computerPick()
    console.log('The Computer Chose: ' + ComputerAnswer)
    console.log('You Chose: ' + UserAnswer)
    if (ComputerAnswer == UserAnswer) {
        console.log("It's a tie!")
    }
    if (ComputerAnswer === "rock" && UserAnswer === "paper") {
        console.log("You Win!")
    }
    if (ComputerAnswer === "paper" && UserAnswer === "scissors"){
        console.log("You Win!")
    }
    if (ComputerAnswer === "scissors" && UserAnswer === "rock"){
        console.log("You Win!")
    }
    else {
        console.log("You Lose!")
    }
}