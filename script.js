

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * (3 - 1 + 1) + 1)
  switch(computerChoice) {
    case 1:
      return "Rock"
    case 2:
      return 'Paper'
    case 3:
      return "Scissors"
    }
}

function playRound(computerChoice, userChoice) {
  let userChoiceUpper = userChoice.charAt(0).toUpperCase() + userChoice.slice(1)
  switch(computerChoice) {
    case "Rock":
      switch (userChoice) {
        case 'rock':
          console.log(`User: ${userChoiceUpper}\nComputer: ${computerChoice}\nIt's a draw!`)
          break;
        case 'paper':
          console.log(`User: ${userChoiceUpper}\nComputer: ${computerChoice}\nIt's a win!`)
          break;
        case 'scissors':
          console.log(`User: ${userChoiceUpper}\nComputer: ${computerChoice}\nIt's a loss!`)
          break;
        default:
          console.log("Please enter valid value.")
          break;
      }
      break;
    case "Paper":
      switch (userChoice) {
        case 'paper':
          console.log(`User: ${userChoiceUpper}\nComputer: ${computerChoice}\nIt's a draw!`)
          break;
        case 'scissors':
          console.log(`User: ${userChoiceUpper}\nComputer: ${computerChoice}\nIt's a win!`)
          break;
        case 'rock':
          console.log(`User: ${userChoiceUpper}\nComputer: ${computerChoice}\nIt's a loss!`)
          break;
        default:
          console.log("Please enter valid value.")
          break;
      }
      break;
    case "Scissors":
      switch (userChoice) {
        case 'scissors':
          console.log(`User: ${userChoiceUpper}\nComputer: ${computerChoice}\nIt's a draw!`)
          break;
        case 'rock':
          console.log(`User: ${userChoiceUpper}\nComputer: ${computerChoice}\nIt's a win!`)
          break;
        case 'paper':
          console.log(`User: ${userChoiceUpper}\nComputer: ${computerChoice}\nIt's a loss!`)
          break;
        default:
          console.log("Please enter valid value.")
          break;
      }
      break;
  }
}

let userChoice = prompt("What's your choice? Rock/Paper/Scissors").toLowerCase()

playRound(getComputerChoice(), userChoice)