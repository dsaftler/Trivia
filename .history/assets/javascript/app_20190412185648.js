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
var wins, wrongs, misses, seconds;
var correctAnswerId;
var timer;
var isNewGame = true;
var timerRunning=false;

var States = {
  PREGAME: 1,
  PLAYING: 2,
  GAMEOVER: 3,
  YOUWON: 4
};
var GameState = States.PREGAME;

$("document").ready(function () {
  //qArray.forEach(function initGame(currentVal){
 //for (let i=0; i<qArray.length;i++){
  //  $(".answers").click(function () {
  //   var $target = $(this).attr("id")
  //   itarget = "answer" + "2"
  //   if (itarget===$target){
  //     //win
  //     stop();
  //     console.log("Win")
  //   }else{
  //     //lose
  //     stop();
  //     console.log("Lose")
  //   }
   
    
      //miss
 
  //  });
 // }
 });

function initGame() {
  // show game pieces: question, answers
  wins = 0;
  wrongs = 0;
  misses = 0;
  seconds = 30;

  showTime();
  newQuestion();
} 


function newQuestion()
{
  
  $("#question").text("question");
  $("#answer0").text("answer 1");
  $("#answer1").text("answer 2");
  $("#answer2").text("answer 3");
  $("#answer3").text("answer 4");
 
  seconds = 30;
  timer = setInterval(tick, 1000);
  
}





function closeGame()
{
  $("#wins").text(wins);
  $("#wrongs").text(wrongs);
  $("#misses").text(misses);
  $("#newGame").show();
}


//  The decrement function.
function tick() 
{
  //  Decrease number by one.

  seconds--;
  if (seconds < 0) {
    //  ...run the stop function.
    stopTimer()
    //  Alert the user that time is up.
    console.log("Miss");
    return;
  }
  showTime();

} 

function stopTimer() {
  //  Clears our intervalId
  //  We just pass the name of the interval
  //  to the clearInterval function.
  clearInterval(timer);
  showTime();
}

//  Execute the run function.
function showTime(){
 $("#timer").html("<h2>" + seconds + "</h2>");
 console.log(seconds);
}

function Misses(){
  misses++;
 // showMisses
}

