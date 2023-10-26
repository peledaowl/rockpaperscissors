

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * (3 - 1 + 1) + 1)
  switch (computerChoice) {
    case 1:
      return "Rock"
    case 2:
      return 'Paper'
    case 3:
      return "Scissors"
  }
}

function playRound(computerChoice, ) {
  let userChoice = prompt("What's your choice? Rock/Paper/Scissors").toLowerCase()
  let userChoiceUpper = userChoice.charAt(0).toUpperCase() + userChoice.slice(1)
  switch (computerChoice) {
    case "Rock":
      switch (userChoice) {
        case 'rock':
          return [(`User: ${userChoiceUpper}\nComputer: ${computerChoice}\nIt's a draw!`), 'draw']
        case 'paper':
          return [(`User: ${userChoiceUpper}\nComputer: ${computerChoice}\nIt's a win!`), 'win']
        case 'scissors':
          return [(`User: ${userChoiceUpper}\nComputer: ${computerChoice}\nIt's a loss!`), 'loss']
        default:
          return ("Please enter valid value.")
      }

    case "Paper":
      switch (userChoice) {
        case 'paper':
          return [(`User: ${userChoiceUpper}\nComputer: ${computerChoice}\nIt's a draw!`), 'draw']
        case 'scissors':
          return [(`User: ${userChoiceUpper}\nComputer: ${computerChoice}\nIt's a win!`), 'win']
        case 'rock':
          return [(`User: ${userChoiceUpper}\nComputer: ${computerChoice}\nIt's a loss!`), 'loss']
        default:
          return ("Please enter valid value.")
      }

    case "Scissors":
      switch (userChoice) {
        case 'scissors':
          return [(`User: ${userChoiceUpper}\nComputer: ${computerChoice}\nIt's a draw!`), 'draw']
        case 'rock':
          return [(`User: ${userChoiceUpper}\nComputer: ${computerChoice}\nIt's a win!`), 'win']
        case 'paper':
          return [(`User: ${userChoiceUpper}\nComputer: ${computerChoice}\nIt's a loss!`), 'loss']
        default:
          return ("Please enter valid value.")
      }
  }
}

function game(func) {
  let userScore = 0
  let computerScore = 0
  for(let i = 0; i <= 4; i++ ) { // Repeating the playRound function five times
    let funcCall = func()
    if (funcCall[1] == 'win') {
      userScore++;
      console.log(funcCall[0])
    } else if (funcCall[1] == 'draw') {
      console.log(funcCall[0])
    } else if (funcCall[1] == 'loss') {
      computerScore++;
      console.log(funcCall[0])
    } else {
      console.log(funcCall)
      i--;
    }
  }
  if (userScore > computerScore) {
    console.log(`The final score: \nUser: ${userScore}\nComputer: ${computerScore}\nYou won the game!`)
  } else if (userScore < computerScore) {
    console.log(`The final score: \nUser: ${userScore}\nComputer: ${computerScore}\nYou lost the game.`)
  } else if (userScore == computerScore) {
    console.log(`The final score: \nUser: ${userScore}\nComputer: ${computerScore}\nThe game is draw.`)
  }
}


game(() => playRound(getComputerChoice()));

