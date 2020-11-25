function computerPick() {
    rockPaperScissors = ["rock", "paper", "scissors"]
    let i = Math.floor(Math.random()*3)
    return rockPaperScissors[i];
}

function Game(UserInput) {
    let UserAnswer = UserInput.toLowerCase()
    if (UserAnswer == 'rock' || 'paper' || 'scissors') {
        let ComputerAnswer = computerPick()
        console.log('The Computer Chose: ' + ComputerAnswer)
        console.log('You Chose: ' + UserAnswer)
        if (ComputerAnswer == UserAnswer) {
                console.log("It's a tie!")
        }
        else if (ComputerAnswer === "rock" && UserAnswer === "paper") {
            console.log("You Win!")
        }
        else if (ComputerAnswer === "paper" && UserAnswer === "scissors"){
            console.log("You Win!")
        }
        else if (ComputerAnswer === "scissors" && UserAnswer === "rock"){
            console.log("You Win!")
        }
        else {
            console.log("You Lose!")
        }
        return 'Game Over'
    }
    else {
        console.log("Please enter Rock, Paper, or Scissors")
    }   
}