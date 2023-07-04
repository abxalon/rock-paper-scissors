
    // Create a global array array with options for compPlays selection
    // Create three scores, userScore, compScore, tiesScore, self explanatory
    const options = ["rock", "paper", "scissors"];
    let userScore = 0;
    let compScore = 0;
    let tiesScore = 0;

    // Create a function that plays a single round, comparing results
    function playRound(){
        // Declare local variables for the user's and the computer's move.
        let userPlays = prompt("We are playing rock, paper, scissors. Your choice is:").toLocaleLowerCase();
        let compPlays = options.at(Math.floor(Math.random()*3));

        // Log player and computer moves
        console.log("User played: " + userPlays);
        console.log("Computar played: " + compPlays);

        // Compare results and add results to global variable.
        if(userPlays === compPlays){
            console.log("It's a tie!");
            tiesScore = tiesScore + 1;
        } else if(userPlays === "rock" && compPlays === "paper"){
            console.log("You loose!, paper beats rock");
            compScore = compScore + 1;
        } else if(userPlays === "paper" && compPlays === "scissors") {
            console.log("You loose!, scissors beat paper");
            compScore = compScore + 1;
        } else if(userPlays === "scissors" && compPlays === "rock") {
            console.log("You loose!, rock beats scissors");
            compScore = compScore + 1;
        } else if(userPlays === "paper" && compPlays === "rock") {
            console.log("You win!, paper beats rock");
            userScore = userScore + 1;
        } else if(userPlays === "rock" && compPlays === "scissors"){
            console.log("You win!, rock beats scissors");
            userScore = userScore + 1;
        } else if(userPlays === "scissors" && compPlays  === "paper"){
            console.log("You win!, scissors beat paper");
            userScore = userScore + 1;
        }
    }

    // Declare game function with a loop counting from zero to five rounds.
    // Invoke playRound function inside to get a single round of RPS
    // Log result in console
    // Log final result in console
    function game(){
        for(i = 0; i < 5; i++)
        playRound();
        console.log("User's score is: " + userScore);
        console.log("Computer's score is: " + compScore);
        if(compScore >= userScore && compScore >= tiesScore) {
            console.log("The computer wins with " + compScore + " points!");
        }
        else if (userScore >= compScore && userScore >= tiesScore) {
            console.log("The user wins with " + userScore + " points!");
        }
        else {
            console.log("It's an overall tie!")
        }
    }
    
    // Invoke game function.
    game();