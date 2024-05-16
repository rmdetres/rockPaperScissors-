//global variables
let humanScore = 0;
let computerScore = 0;
let roundCounter = 0;
const roundDisplay = document.querySelector("#counter");
const winnerMessageDisplay = document.querySelector("#winnerMessage");
const displayHumanScore = document.querySelector("#counterUser");
const displayComputerScore = document.querySelector("#counterComputer");






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
    let convertHumanScoreToString = humanScore.toString();
    displayHumanScore.textContent = convertHumanScoreToString; //this updates the front end
    

}


function keepComputerScore(){
        computerScore++;
       let convertComputerScoreToString = computerScore.toString();
       displayComputerScore.textContent = convertComputerScoreToString; //this updates the front end
    

}





function keepRoundScore(){
    
   

    if(roundCounter>=5){     //this sets a 5 round limit and resets to zero after 5 rounds.
        roundCounter = 0;
        let displayCount = roundCounter.toString();
        roundDisplay.textContent = displayCount;
        winnerMessageDisplay.textContent = "Lets start the game";

        if(humanScore>computerScore){

            humanScore = 0;
            computerScore = 0;
            let convertHumanScoreToString = humanScore.toString();
            let convertComputerScoreToString = computerScore.toString();

            displayComputerScore.textContent = convertComputerScoreToString;
            displayHumanScore.textContent = convertHumanScoreToString;

            throw alert("the game is over!, you won!");

        }if(humanScore === computerScore){
            humanScore = 0;
            computerScore = 0;
            let convertHumanScoreToString = humanScore.toString();
            let convertComputerScoreToString = computerScore.toString();

            displayComputerScore.textContent = convertComputerScoreToString;
            displayHumanScore.textContent = convertHumanScoreToString;

            throw alert(" the game is over! It was a tie! ");



        }else{

            humanScore = 0;
            computerScore = 0;
            let convertHumanScoreToString = humanScore.toString();
            let convertComputerScoreToString = computerScore.toString();

            displayComputerScore.textContent = convertComputerScoreToString;
            displayHumanScore.textContent = convertHumanScoreToString;
            throw alert("the game is over!, you lose!");
            }
        


    }else{

        roundCounter++;
        let displayCount = roundCounter.toString();
        roundDisplay.textContent = displayCount;
        }
    

}








function playTheGame(x){


    

    let humanChoice = x;
    let computerchoice = getComputerChoice() 

    if (humanChoice === computerchoice){
         console.log("it was a tie");
         winnerMessageDisplay.textContent = `it was a tie, you both choose ${humanChoice}`;
         keepRoundScore();
    } else if (humanChoice === "rock"){
        if (computerchoice === "paper"){
            keepRoundScore();
            keepComputerScore();
            
            winnerMessageDisplay.textContent = "you choose rock, the computer choose paper you lose!";
            console.log( "you choose rock the computer choose paper you lose!");
        } else if (computerchoice === "scissors"){
            keepRoundScore();
            keepHumanScore();
            
            winnerMessageDisplay.textContent = "you choose rock, the computer choose scissors you win!";
            console.log( "you choose rock the computer choose scissors you win!");
        }
    }else if (humanChoice === "paper"){
        if (computerchoice === "rock"){
            keepRoundScore();
            keepHumanScore();
            winnerMessageDisplay.textContent = "you choose paper, the computer choose rock you win!";
            console.log( "you choose paper the computer choose rock you win!");
    } if (computerchoice === "scissors"){
        keepRoundScore();
        keepComputerScore()
        
        winnerMessageDisplay.textContent ="you choose paper, the computer chose scissors you lose!";
        console.log( "you paper the computer chose scissors you lose!");
}}
else if(humanChoice === "scissors"){
    if(computerchoice === 'paper'){
        keepRoundScore();
        keepHumanScore();
        
        winnerMessageDisplay.textContent = "you choose scissors, the computer chose paper,you win!";
        console.log( "you choose scissors the computer chose paper,you win!");
    } if (computerchoice === "rock"){
        keepRoundScore();
        keepComputerScore();
        
        winnerMessageDisplay.textContent ="you choose scissors the computer choose rock you lose!";
        console.log( "you choose scissors the computer choose rock you lose!");
    }
}

    console.log(`your score is ${humanScore} and the computer score is ${computerScore}`)
    


}



getHumanChoice();  //the game is triggered when the user selects a choice.
