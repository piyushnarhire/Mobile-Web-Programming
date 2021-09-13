function getRandomInteger(x) { // sets up the initial random pick
    return Math.floor(Math.random() * x);
}

function getName(x) { // assigns the correct name from the number for display
    let list = ["rock", "paper", "scissors"]
    return list[x];
}

function game(player) { // game runtime
    // rock = 0, paper = 1, scissors = 2
    let computerChoice = getRandomInteger(3);
    if (player ==  computerChoice) {
        draw(player);
    }
    else {
        switch (player) {
            case 0: // if player picks rock
                if (computerChoice == 1) { // Computer picks paper
                    playerLose(computerChoice);
                }
                if (computerChoice == 2) { // Computer picks scissors
                    playerWin(computerChoice);
                }
                break;
            case 1: // if player picks paper
                if (computerChoice == 0) { // Computer picks rock
                    playerWin(computerChoice);
                }
                if (computerChoice == 2) { // Computer picks scissors
                    playerLose(computerChoice);
                }
                break;
            case 2: // if player picks scissors
                if (computerChoice == 0) { // Computer picks rock
                    playerLose(computerChoice);
                }
                if (computerChoice == 1) { // Computer picks paper
                    playerWin(computerChoice);
                }
                break;
        }
    }
}

// End conditions below

function playerWin(computer){
    window.alert("Your opponent picked " + getName(computer) + ". You win!")
}

function playerLose(computer) {
    window.alert("Your opponent picked " + getName(computer) + ". Sorry, you lose.")
}

function draw(computer){
    window.alert("It's a draw! Your opponent also picked " + getName(computer) + ".")
}