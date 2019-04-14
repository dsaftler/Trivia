// Advanced game has a 30 second timer that counts down to 0 for each question !!!!!!!!!!!!  changed to 15 seconds
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

var qArray =[];
var wins, wrongs, misses, seconds;
var correctAnswerId;
var timer;
var seconds;
var isNewGame = true;
var timerRunning=false;
var i;
var qArrayLength
var sayCorrect
var answerTime=10;
var displayInfoTime=5;
$(".answers").pointerEvents = "none";
$(document).ready(function () {
  //initGame();  // called by newGame button
  $(".answers").click(function() {
    stopTimer();
    $(".answers").css("pointer-events","none");
    //which answer did I click?
    var target = $(this).attr("id")
    for(let j = 0; j<4; j++) {
      jtarget = "answer" + j
      //console.log(jtarget)
      if (jtarget === target){
        if (j === correctAnswerId){
          showMe("win");
        } else {
          showMe("lose");
        }
      }
    }
  });
});


function initGame() {
  wins = 0;
  wrongs = 0;
  misses = 0;
  $(".scoreElements").hide();
  $(".playElements").hide();
  $(".answers.li").hide();
  $("#newGame").hide();
  loadQuestions();
  i = 0;
  newQuestion(i);
} 

function newQuestion(i)
{
  console.log(i)
  if (i < qArrayLength){
    // show game pieces: question, answers
    $(".playElements").show();
    $("#timer").show();
    $(".tmyk").hide();
    q="Question "+(i+1)+":  "
    $("#question").text(q+(qArray[i].question));
    $("#answer0").text(qArray[i].ansArray[0]);
    //console.log(qArray[i].ansArray[0]);
    $("#answer1").text(qArray[i].ansArray[1]);
    $("#answer2").text(qArray[i].ansArray[2]);
    $("#answer3").text(qArray[i].ansArray[3]);
    correctAnswerId = qArray[i].correct;
    correctAnswer = qArray[i].ansArray[correctAnswerId]
    //console.log(qArray[i].ansArray[correctAnswerId]);
    info = qArray[i].extra;
    $(".answers").css("pointer-events", "auto");
    clearInterval(timer)
    seconds = answerTime;
    showTime();
    timer = setInterval(tick, 1000);
  } else {
    gameOver();
  }
}

function gameOver()
{
  $(".playElements").hide();
  $(".scoreElements").show();
  $("#showWinsCnt").text(wins + " Correct")
  $("#showLoseCnt").text( wrongs + " Wrong")
  $("#showMissCnt").text(  misses + " Time-Outs")
  $("#newGame").text("Play Again?"); // calls initGame
  $("#newGame").show();
}


//  The decrement function.
function tick() 
{
  seconds--;
  if (seconds < 0) {
    //  ...run the stop function.
    stopTimer()
    showMe("miss");
    return;
  }
  showTime();
} 

function stopTimer() 
{
  clearInterval(timer);
  $("#answers").pointerEvents="none";
}

//  Execute the run function.
function showTime()
{
 $("#timer").text(seconds);
 //console.log(seconds);
}
function showMe(result){
  switch (result){
    case "win":
      //alert("Correct");
      sayCorrect="Correct! "
      wins++;
      break;
    case "lose":
      //alert("Incorrect");
      sayCorrect = 'Sorry...the answer was: '  + correctAnswer
      wrongs++
      break;
    case "miss":
      $("#timer").text("Timed-Out");
      sayCorrect = 'Sorry...the answer was:  ' + correctAnswer
      misses++;
      break;
   }
  showExtra();
  setTimeout(displayPause, 1000 * displayInfoTime)
  
  }
function showExtra(){
  imgUrl = qArray[i].image
  $(".image").attr({"src":imgUrl, "alt": qArray[i].imageAlt});

  //console.log("<img src=" + qArray[i].image + ">");
  $(".extra").html("<h3 class='glowing cyan'>"+sayCorrect + "<br/></h3>") ; 
  $(".extra").append(qArray[i].extra);
  $(".tmyk").show();
  //$(".extra").show();
  //$(".image").show();

} 
function displayPause(){
  stopTimer();
  clearTimeout();
  i++;
  newQuestion(i)
}

function loadQuestions(){
qArray = [
    {
      question: "How many moons are in our Solar System?",
      correct: 3,
      ansArray: [25, 50, 97, 181],
      image: "assets/images/Moons_of_solar_system.jpg",
      imgAlt: "Moons of the solar system",
      extra: "These moons (also known as natural satellites) vary greatly in size and quantity per planet. For example, the largest moon is Jupiter’s Ganymede, and the smallest is Mar’s Deimos. Ganymede has a diameter of 3,273 miles, and Deimos has a diameter of 7 miles."
    
    },
    {
      question: "What percent of the universe is dark matter? (Plus or minus 2%.)",
      correct: 1,
      ansArray: ["15%", "27%", "50%", "80%"],
      image: "assets/images/darkmatter.png",
      imgAlt:"Dark matter web",
      extra: "The rest of the universe is around 68% dark energy, and less than 5% of the universe is made up of what we would consider ‘normal’ matter. This means that roughly 80% of the mass of the universe is made up of material we cannot see."
    },
    {
      question: "What is the most common type of star found in the Milky Way?",
      correct: 1,
      ansArray: ["Neutron stars", "Red dwarf stars", "Supernovae", "G-type"],
      image: "assets/images/red-dwarf.jpg",
      imgAlt: "Types of Stars Infographic",
      extra: "Red dwarf stars make up an estimated ¾ of all stars found in the Milky Way. The surface temperature of red dwarf stars is less than 4,000 Kelvin, and they have a very low luminosity and therefore cannot be easily seen. In fact, from Earth not one red dwarf star can be seen with the naked eye. Since they develop very slowly and are constant for trillions of years, there are actually no advanced stars of this type in our galaxy because our galaxy is too young!"
    },
    {
      question: "What is the closest star to the Sun?",
      correct: 0,
      ansArray: ["Proxima Centauri", "Tau Ceti", "51 Pegasi", "Rigel"],
      image: "assets/images/proxima_centauri.jpg",
      imgAlt: "Proxima Centauri",
      extra: "Proxima Centauri is a red dwarf star located in Alpha Centauri system, which is in the Centaurus constellation. Alpha Centauri is actually a triple star system with Proxima Centauri being the closest to the sun. It is 4.24 light years away from the sun, and is not visible to the naked eye from Earth."
    },
    {
      question: "What has a gravitational pull so strong that even light cannot escape it?",
      correct: 2,
      ansArray: ["Quantum Gravity", "True Love", "Black Hole", "Worm Hole"],
      image: "assets/images/blackhole.jpg",
      imgAlt: "Black Hole",
      extra: "Black holes are one of the deadliest things in the universe. They are formed when a star with a mass more than three times that of our sun dies and collapses onto itself after an explosion called a supernova. Black holes can siphon the gas out of stars until they vanish. They can even break apart and swallow planets."
    },
    {
      question: "Which NASA space flight was the last manned mission to the moon?",
      correct: 3,
      ansArray: ["Gemini 12", "Skynet 1.0", "Apollo 13","Apollo 17"],
      image: "assets/images/moon-landing.jpg",
      imgAlt: "Moon Landing",
      extra: "Apollo 17 launched on December 7, 1972 as the first night launch done by NASA. It was also the final mission of NASA’s Apollo program. Apollo 17 was the last time humans traveled beyond low Earth orbit. The mission also boasted that at the time it had the longest moon landing, largest lunar samples, longest time in orbit, and the longest total moonwalks."
    },
    {
      question: "What is the longest continuous time a human has spent in space? (Plus or minus 20 days.)",
      correct: 2,
      ansArray: ["37 days", "189 days", "437 days", "682 days"],
      image: "assets/images/poljakov.jpg",
      imgAlt: "Portrait of Poljakov",
      extra: "This amounts to more than 14 months in space. This feat was accomplished by Valeri Polyakov, a Russian astronaut who stayed aboard the Mir space station from January 1994 to March 1995. When Polyakov retired he had over 678 cumulative days in space, and his combined space time was over 22 months."
    },
    {
      question: "How much time does sun rays take to reach earth?",
      correct: 2,
      ansArray: ["58 seconds", "3.5 minutes", "8 minutes", "14 minutes"],
      image: "assets/images/Earth_to_Sun.png",
      imgAlt: "Distance to the Sun",
      extra: "The speed of light in vacuum, commonly denoted c, is a universal physical constant important in many areas of physics. Its exact value is299,792,458 meters per second (approximately 300,000 km/s (186,000 mi/s))."
    },
    {
      question: "When will Halley’s Comet will be visible from Earth again?",
      correct: 2,
      ansArray: ["2024", "2039", "2061", "2101"],
      image: "assets/images/HalleysComet.jpg",
      imgAlt: "Haley's Comet",
      extra: "Halley's Comet is arguably the most famous comet. It is a ‘periodic’ comet and returns to Earth's vicinity about every 75 years, making it possible for a human to see it twice in his or her lifetime. The last time it was here was in 1986, and it is projected to return in 2061."
    },
    {
      question: "How long was the shortest space flight?",
      correct: 0,
      ansArray: ["15 minutes", "73 minutes", "4.5 hours", "3 days"],
      image: "assets/images/freedom7.jpg",
      imgAlt: "Freedom 7 launch",
      extra: "This occurred on May 5, 1961 when Alan Shepard achieved an altitude of 115 miles in NASA’s Freedom 7. He was also the first American in space. Shepard later went on to become the oldest person to walk on the surface of the moon. He achieved this in 1971 during the Apollo 14 mission. At the time, he was 47 years old."
    }
  ]
  qArrayLength=qArray.length;
  //console.log(qArray);
};




