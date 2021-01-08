window.addEventListener('load', init)
//Globals

// available levels
var levels = {
    easy: 5,
    medium: 4,
    hard: 3,
    superstar: 2
}

//to change level
var currentLevel = levels.easy;

let time = currentLevel;
let score= 0;
let isPlaying;

const wordInput = document.getElementById('word-input');
const currentWord = document.getElementById('current-word');
const scoreDisplay = document.getElementById('score');
const timeDisplay = document.getElementById('time');
const message = document.getElementById('message');
const message2 = document.getElementById('message2');
const seconds = document.getElementById('seconds');

// let easyLevel = document.getElementById('easyLevel');
// let mediumLevel = document.getElementById('mediumLevel');
// let hardLevel = document.getElementById('hardLevel');

const words = [
    'hat',
    'document',
    'river',
    'lucky',
    'statue',
    'generate',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'definition',
    'speedtyping',
    'countdown',
    'easy',
    'textbook',
    'philosophy',
    'strength',
    'deteriorating',
    'chemotherapy',
    'neurosurgeon',
    'australia',
    'natural',
    'interested',
    'particularly',
    'classical',
    'determination',
    'acquisition',
    'successful',
    'responsibility',
    'love',
    'book',
    'hater',
    'index'
  ];

function init(){
    seconds.innerHTML = currentLevel
    // Load word from arrat
    showWord(words);
    //start matching on word input
    wordInput.addEventListener('input', startMatch)
    
    //Call countdown every second
    setInterval(countdown, 1000)
    //check is person is still playing
    setInterval(checkStatus, 50);
}

function startMatch(){
    if(matchWords()){
      isPlaying = true;
      time = currentLevel + 1;
      showWord(words);
      wordInput.value = '';
      score ++;
      
    }

    if (score === -1) {
        scoreDisplay.innerHTML = 0;
    } else {
        scoreDisplay.innerHTML = score;
    }

  if(score >= 4 && score < 7){
        currentLevel = levels.medium;
        message2.innerText = 'Medium!';
    } else if(score >=8 && score < 10){
        currentLevel = levels.hard;
        message2.innerText = 'Hard!!';
    } else if(score > 11){
        currentLevel = levels.superstar;
        message2.innerText = 'SuperStar!!!!';
    } else{
        message2.innerText = 'Easy'
    }

    
   
}

function matchWords() {
    if(wordInput.value === currentWord.innerHTML){
    message.innerHTML = 'Correct!'
    return true;
    } else{
        message.innerHTML = ''
        return false;
    }
}

//pick and show random word
function showWord(words) {
    const randIndex = Math.floor(Math.random() * words.length);

    currentWord.innerHTML = words[randIndex];
}

//Countdown timer
function countdown(){
    if(time> 0){
        time--
    } else if (time === 0){
        isPlaying = false;
    }
    //show time
    timeDisplay.innerHTML = time;
}
//Check game status
function checkStatus(){
    if(!isPlaying && time===0){
        message.innerHTML = 'Game Over, Keep trying!'
        score = -1;
    }
}
