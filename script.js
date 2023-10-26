
let userChoice = prompt("What's your choice? Rock/Paper/Scissors").toLowerCase()

let computerChoice = Math.floor(Math.random() * (3 - 1 + 1) + 1)

switch(computerChoice) {
  case 1:
    switch (userChoice) {
      case 'rock':
        console.log(`User: ${userChoice}\nComputer: Rock\nIt's a draw!`)
        break;
      case 'paper':
        console.log(`User: ${userChoice}\nComputer: Rock\nIt's a win!`)
        break;
      case 'scissors':
        console.log(`User: ${userChoice}\nComputer: Rock\nIt's a loss!`)
        break;
    }
    break;
  case 2:
    switch (userChoice) {
      case 'paper':
        console.log(`User: ${userChoice}\nComputer: Paper\nIt's a draw!`)
        break;
      case 'scissors':
        console.log(`User: ${userChoice}\nComputer: Paper\nIt's a win!`)
        break;
      case 'rock':
        console.log(`User: ${userChoice}\nComputer: Paper\nIt's a loss!`)
        break;
    }
    break;
  case 3:
    switch (userChoice) {
      case 'scissors':
        console.log(`User: ${userChoice}\nComputer: Scissors\nIt's a draw!`)
        break;
      case 'rock':
        console.log(`User: ${userChoice}\nComputer: Scissors\nIt's a win!`)
        break;
      case 'paper':
        console.log(`User: ${userChoice}\nComputer: Scissors\nIt's a loss!`)
        break;
    }
    break;
}