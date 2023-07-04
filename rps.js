
    // Create an array of options for compPlays selection
    // Create userPlays variable from a case insensitive user input
    // Create compPlays variable from selecting an option from the array through index pointing by a random rounded number
    const options = ["rock", "paper", "scissors"];
    let userPlays = prompt("We are playing rock, paper, scissors. Your choice is:").toLocaleLowerCase();
    let compPlays = options.at(Math.floor(Math.random()*3));

    // Create a function that plays a single round, comparing results
    function playRound(playerSelection, computerSelection){
        if(playerSelection === computerSelection){
            console.log("It's a tie!");
        } else if(playerSelection === "rock" && computerSelection === "paper"){
            console.log("You loose!, paper beats rock");
        } else if(playerSelection === "paper" && computerSelection === "scissors") {
            console.log("You loose!, scissors beat paper");
        } else if(playerSelection === "scissors" && computerSelection === "rock") {
            console.log("You loose!, rock beats scissors");
        } else if(playerSelection === "paper" && computerSelection === "rock") {
            console.log("You win!, paper beats rock");
        } else if(playerSelection === "rock" && computerSelection === "scissors"){
            console.log("You win!, rock beats scissors");
        } else if(playerSelection === "scissors" && computerSelection  === "paper"){
            console.log("You win!, scissors beat paper");
        }
    }

    // Invoke playRound function with user input and comp random selection
    playRound(userPlays,compPlays);

    // Log player and computer moves
    console.log("User played: " + userPlays);
    console.log("Computar played: " + compPlays);
    
    