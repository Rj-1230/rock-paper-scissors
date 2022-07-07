/*
  Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/

// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'
const playerName = prompt('Enter your name');
const wrapperDiv = document.getElementById('welcome');
wrapperDiv.innerText= `Welcome ${playerName} . Let's Play !! `;
document.getElementById('playGameButton').style.visibility = 'visible';
document.getElementById('endGameButton').style.visibility = 'visible';

// const playBtn = document.getElementById('playGameButton');
//    playBtn.innerHTML= `<button id='playGameButton'> Play Game </button>`;
//    const endBtn = document.getElementById('endGameButton');
// endBtn.innerHTML = `<button id='endGameButton'> End Game </button>`;



const totalScores = {playerScore : 0, computerScore:0};
function getComputerChoice() {
    let items = ['Rock', 'Paper', 'Scissors'];
    let rand = Math.floor(Math.random()*items.length);
    return items [rand];
}

// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0
function getResult(playerChoice, computerChoice) {
  // return the result of score based on if you won, drew, or lost
  
  

  // All situations where human draws, set `score` to 0
  if(playerChoice == computerChoice)
  return 0;

  // All situations where human wins, set `score` to 1
  // make sure to use else ifs here
  if(playerChoice=='Rock' && computerChoice=='Scissors'){
    score = 1;
  }
  else if(playerChoice=='Paper' && computerChoice=='Rock'){
    score=1;
  }
  else if(playerChoice=='Scissors' && computerChoice=='Paper'){
    score=1;
  }

  // Otherwise human loses (aka set score to -1)
  else{
    score=-1;
  }

  // return score
  return score;
}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
  // Hint: on a score of -1
  // You should do result.innerText = 'You Lose!'
  const handsDiv = document.getElementById('hands');
  const playerScoreDiv = document.getElementById('player-score');
  const resultDiv = document.getElementById('result');
  // Don't forget to grab the div with the 'result' id!
//   resultDiv.innerText = 

if(score==1){
    resultDiv.innerText = 'You Won !!';
}
else if(score==0){
    resultDiv.innerText = "It's a Tie";
}
else{
        resultDiv.innerText = 'You Lose !';
    
}
playerScoreDiv.innerText = `${playerName} Score = ${totalScores['playerScore']} \u00a0 \u00a0 \u00a0 Computer Score = ${totalScores['computerScore']}`;
handsDiv.innerText = `${playerName} chose ${playerChoice} \u00a0 \u00a0 \u00a0  Vs   \u00a0 \u00a0 \u00a0  Computer chose ${computerChoice}`;

}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
//   console.log(playerChoice);
    const computerChoice= getComputerChoice();
    const score = getResult(playerChoice,computerChoice);
    totalScores.playerScore+=score;
    totalScores.computerScore-=score;
    showResult(score,playerChoice,computerChoice);
    // console.log(score);
}


// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  document.getElementById('endGameButton').style.visibility = 'visible';
  totalScores['computerScore']=0;
totalScores['playerScore']=0;
  const handsDiv = document.getElementById('hands');
  const playerScoreDiv = document.getElementById('player-score');
  const resultDiv = document.getElementById('result');

playerScoreDiv.innerText = ' New Game ';
handsDiv.innerText = '';
resultDiv.innerText='';
  // use querySelector to select all RPS Buttons
const rpsButtons = document.querySelectorAll('.rpsButton');
// console.log(rpsButtons);
// rpsButtons[0].onclick = ()=> console.log(rpsButtons[0].value);

  // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *
  
  // 1. loop through the buttons using a forEach loop
  rpsButtons.forEach(rpsButton =>{
    rpsButton.onclick = ()=>{
      // document.getElementById('playGameButton').style.visibility = 'hidden';
        onClickRPS(rpsButton.value);
    }
  })
  // 2. Add a 'click' event listener to each button
  // 3. Call the onClickRPS function every time someone clicks
  // 4. Make sure to pass the currently selected rps button as an argument

   // Add a click listener to the end game button that runs the endGame() function on click
  //  const playBtn = document.getElementById('playGameButton');
  //  playBtn.innerHTML= `<button id='playGameButton' disabled> Play Game </button>`; 
  //  document.getElementById('playGameButton').style.visibility = 'hidden';
 const endBtn = document.getElementById('endGameButton');
 endBtn.onclick =()=>{
    endGame();
 }

  // Add a click listener to the end game button that runs the endGame() function on click
  
}

// ** endGame function clears all the text on the DOM **
function endGame() {
  
  const handsDiv = document.getElementById('hands');
  const playerScoreDiv = document.getElementById('player-score');
  const resultDiv = document.getElementById('result');

playerScoreDiv.innerText = `Final Score :- ${playerName}= ${totalScores['playerScore']} \u00a0 \u00a0  Computer = ${totalScores['computerScore']} `;
handsDiv.innerText = '';
console.log(totalScores['computerScore']);
console.log(totalScores['playerScore']);
if(totalScores['computerScore']>totalScores['playerScore']){
  resultDiv.innerText=`Computer se har gaye yaar tum ${playerName}`;
}
else if(totalScores['computerScore']<totalScores['playerScore']){
  resultDiv.innerText=`Computer se hi jeete ho ${playerName}. Itna v khush na ho`;
}
else{
  resultDiv.innerText=`Na ${playerName} jeeta Na computer. Dono bekar hai`;
}

totalScores['computerScore']=0;
totalScores['playerScore']=0;
// const endBtn = document.getElementById('endGameButton');
// endBtn.innerHTML = `<button id='endGameButton' disabled> End Game </button>`;
document.getElementById('endGameButton').style.visibility = 'hidden';
const playBtn = document.getElementById('playGameButton');
 playBtn.onclick =()=>{
    playGame();
 }

}

playGame()