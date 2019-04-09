// Advanced game has a 30 second timer that counts down to 0 for each question
// If the timer is 0 OR  a wrong answer is chosen: 
  // show the correct answer for 5 seconds
// display a new question
// restart the timer with no user interaction

// questions are contained in an array with question, array of answers, index of correct answer
// question shows in questionId
// "Correct"  or "Correct Answer" shows in answerId
// 4 possible answers show in 4 clickable buttons 
// buttons have hover behavior
//  only one can be selected (by click)

// scores for Wins, Losses, and Unanswered are kept (correct, wrong, timer ==0)
// ask to play again in link
// click on play restarts the game without re-loading the page

var qArray = ["Est consectetur veniam consectetur magna laborum?",2,["answer 1","answer 2","answer 3","answer 4"],
  "Aliqua officia incididunt velit cillum officia labore Lorem officia?", 3, ["answer 1", "answer 2", "answer 3", "answer 4"], "Amet duis aute et exercitation?", 0, ["answer 1", "answer 2", "answer 3", "answer 4"]] ;

var wins, wrongs, misses, seconds ;
var isNewGame = true;
$("document").ready(function () {
  //qArray.forEach(function initGame(currentVal){
 for (let i=0; i<qArray.length;i++){
   initGame();
   playGame();
 }
 });

function playGame(){
  while (seconds > 0) {
    run()
  } 
  if (seconds === 0) {

    //  ...run the stop function.
    stop();

    //  Alert the user that time is up.
    Misses();
  }
}



function initGame(){
  // show game pieces: question, answers
   if (isNewGame){
     wins=0;
     $("#wins").text(wins);
     wrongs=0;
     misses=0;
     isNewGame=false;
     // show game counters
   }
   seconds=30;
} 
function run() {
  clearInterval(seconds);
  seconds = setInterval(decrement, 1000);
}

//  The decrement function.
function decrement() {
  //  Decrease number by one.
  seconds--;
  //  Show the number in the #show-number tag.
  $("#timer").html("<h2>" + seconds + "</h2>");
  //  Once number hits zero...
} 

function stop() {
  //  Clears our intervalId
  //  We just pass the name of the interval
  //  to the clearInterval function.
  clearInterval(seconds);
}

//  Execute the run function.


function Misses(){
  misses++;
 // showMisses
}
});
