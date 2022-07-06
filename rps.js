const computerPlay = () => {
    let num = Math.floor(Math.random() * 3)
    if (num === 0) {
        return 'scissor'
    } else if (num === 1) {
        return 'rock'
    } else {
        return 'paper'
    }
}

let playerScore = 0;
let computerScore = 0;
let playerChoice = 'rock'
let computerChoice = computerPlay()
// computerPlay();
// console.log(computerPlay())
const playRound = (playerChoice, computerChoice) => {
    computerPlay();
    computerChoice = computerPlay();
    let choice;
    choice = prompt('Rock, paper or scissors?')

    playerChoice = choice

    if (playerChoice === 'rock') {
        if (computerChoice === 'scissor') {
            playerScore += 1
            alert(`You win! ${playerChoice} beats ${computerChoice}!`)
        } else if (computerChoice === 'paper') {
            computerScore += 1
            alert(`You lose! ${computerChoice} beats ${playerChoice}!`)
        } else if (computerChoice === 'rock') {
            alert(`It's a tie! You both chose ${computerChoice}`)
        }
    }
    if (playerChoice === 'paper') {
        if (computerChoice === 'scissor' || computerChoice === 'scissors') {
            alert(`You lose! ${computerChoice} beats ${playerChoice}!`)
            computerScore += 1
        } else if (computerChoice === 'paper') {
            alert(`It's a tie! You both chose ${computerChoice}`)
        } else if (computerChoice === 'rock') {
            playerScore += 1
            alert(`You win! ${playerChoice} beats ${computerChoice}!`)
        }
    }
    if (playerChoice === 'scissor' || computerChoice === 'scissors') {
        if (computerChoice === 'scissor') {
            alert(`It's a tie! You both chose ${computerChoice}`)
        } else if (computerChoice === 'paper') {
            playerScore += 1
            alert(`You win! ${playerChoice} beats ${computerChoice}!`)
        } else if (computerChoice === 'rock') {
            computerScore += 1
            alert(`You lose! ${computerChoice} beats ${playerChoice}!`)
        }
    }
}


const game = () => {
    while (playerScore < 5 && computerScore < 5) {
        playRound(playerChoice, computerChoice);
        alert(`The score is ${playerScore} to ${computerScore}!`)
        if (playerScore === 5) {
            alert('You Win!')
        } else if (computerScore === 5) {
            alert('You LOSE!!!!!!!!!!')
        }
    }

}
game(playerChoice, computerChoice);