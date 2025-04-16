let scoreStr = localStorage.getItem('score');
let score;
resetScore(scoreStr);

function resetScore(scoreStr){
 score = scoreStr ? JSON.parse(scoreStr)  : {
  win: 0,
  lost: 0,
  tie: 0,
};
// if(scoreStr !== undefined){
//   score = JSON.parse(scoreStr);
// } else  {
//   win: 0,
//   lost: 0,
//   tie: 0,
 
// };

score.displayScore=  function(){
    return `score:${score.win}, Lost:${score.lost}, Tie:${score.tie}`;
    
  };
  
  showResult();
}
function generateComputerChoice() {
  //This will generate random number between 0 and 3
  let randomNumber = Math.random() * 3;
  if (randomNumber > 0 && randomNumber <= 1) {
    return 'Bat';
  } else if (randomNumber > 1 && randomNumber <= 2) {
    return 'Ball';
  } else {
    return 'Stump'
  }
}

function getResult(userMove, computerMove) {
  if (userMove === 'Bat') {
    if (computerMove === 'Ball') {
      score.win++;
      return 'User won. 😊';
    } else if (computerMove === 'Bat') {
      score.tie++;
      return `It's a tie👍`;
    } else if (computerMove === 'Stump') {
      score.lost++;
      return 'Computer has won 😢';
    }
  } else if (userMove === 'Ball') {
    if (computerMove === 'Ball') {
      score.tie++;
      return `It's a tie 👍`;
    } else if (computerMove === 'Bat') {
      score.lost++;
      return 'Computer has won 😢';
    } else if (computerMove === 'Stump') {
      score.win++;
      return 'User won 😊.';
    }
  } else {
    if (computerMove === 'Ball') {
      score.lost++;
      return 'Computer has won 😢';
    } else if (computerMove === 'Bat') {
      score.win++;
      return 'User won 😊.';
    } else if (computerMove === 'Stump') {
      score.tie++;
      return `It's a tie👍`;
    }
  }
}

function showResult(userMove, computerMove, result) {
  localStorage.setItem('score', JSON.stringify(score));

  document.querySelector('#user-move').innerText = userMove!== undefined ? `you have chosen ${userMove}`:'';

  document.querySelector('#computer-move').innerText = computerMove!== undefined ?`computer choice is ${computerMove}`:'';

  document.querySelector('#result').innerText = result!==undefined ? result:'';

  document.querySelector('#score').innerText =score.displayScore();


  // console.log(score);
  // alert(`You have chosen ${userMove}. Computer choice is ${computerMove} 
  //  ${result}
  // ${score.displayScore()}`);
}