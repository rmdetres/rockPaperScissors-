function getComputerChoice() {

    let computerchoice = " ";
    let max = Math.floor(Math.random() * 3);
    
    switch(max){
        case 0:
        return computerchoice = "rock";
        break;

        case 1:
        return computerchoice = "scissors";
        break;
            
        case 2:
        return computerchoice = "paper";
        break;
    }
    
  }


function getHumanChoice(){

    let humanChoice = "";

    const btnRock = document.querySelector("#btnRock");
    btnRock.addEventListener("click", () => {humanChoice = "rock";
    playTheGame(humanChoice);
    });  
    
    const btnPaper = document.querySelector("#btnPaper");
    btnPaper.addEventListener("click", () => { humanChoice = "paper";
    playTheGame(humanChoice)
    });


    const btnScissors = document.querySelector("#btnScissors");
    btnScissors.addEventListener("click", () => {
    humanChoice = "scissors";
    playTheGame(humanChoice);
    });
    
}

function keepHumanScore(){


    
    humanScore++;
    

}

let humanScore = 0;
let computerScore = 0;
let roundCounter = 0;
const roundDisplay = document.querySelector("#counter");


function keepRoundScore(){
    
   

    if(roundCounter>=5){
        roundCounter = 0;
        let displayCount = roundCounter.toString();
        roundDisplay.textContent = displayCount;
        alert("the game is over!");

    }else {

        roundCounter++;
        let displayCount = roundCounter.toString();
        roundDisplay.textContent = displayCount;
    }

}





function keepComputerScore(){
     computerScore++;

}



function playTheGame(x){


    

    let humanChoice = x;
    let computerchoice = getComputerChoice() 

    if (humanChoice === computerchoice){
         console.log("it was a tie");
         keepRoundScore();
    } else if (humanChoice === "rock"){
        if (computerchoice === "paper"){
            keepComputerScore();
            keepRoundScore();
            console.log( "you choose rock the computer choose paper you lose!");
        } else if (computerchoice === "scissors"){
            keepHumanScore();
            keepRoundScore();
            console.log( "you choose rock the computer choose scissors you win!");
        }
    }else if (humanChoice === "paper"){
        if (computerchoice === "rock"){
            keepHumanScore();
            keepRoundScore();
            console.log( "you choose paper the computer choose rock you win!");
    } if (computerchoice === "scissors"){
        keepComputerScore()
        keepRoundScore();
        console.log( "you paper the computer chose scissors you lose!");
}}
else if(humanChoice === "scissors"){
    if(computerchoice === 'paper'){
        keepHumanScore();
        keepRoundScore();
        console.log( "you choose scissors the computer chose paper,you win!");
    } if (computerchoice === "rock"){
        keepComputerScore();
        keepRoundScore();
        console.log( "you choose scissors the computer choose rock you lose!");
    }
}

    console.log(`your score is ${humanScore} and the computer score is ${computerScore}`)
    


}



getHumanChoice();
