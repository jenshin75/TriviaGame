//********************************* */
//* ONCLICK FUNCTION TO START TIMER */
//********************************* */

$("#start").on("click", function () {
});

//*************************************************** */
//* DISPLAY QUESTIONS, OPTIONS AND STORE USER CHOICES */
//*************************************************** */

var questions = [
  {
    question: "Q1: What is the longest river in the United States?",
    options: ["Colorado_River", "Missouri_River", "Rio_Grande_River"],
    correctAnswer: 2
  },
  {
    question: "Q2: Death Valley is located in what U.S. state?",
    options: ["Nevada", "Texas", "California"],
    correctAnswer: 3
  },
  {
    question: "Q3: Pierre is the capital of what U.S. state?",
    options: ["South_Dakota", "Montana", "Rhode_Island"] ,
    correctAnswer: 1
  }
];

var userChoice = "";
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var timer;
var counter = 99;

function showQuestions() {
  for (let i = 0; i < questions.length; i++) {
  $("#trivia").append("<h2>" + questions[i].question + "</h2>")

  for (let index = 0; index <  questions[i].options.length; index++) {
  $("#trivia").append('<input type="radio" question="' + i + '"  res="' + index + '">' + questions[i].options[index])
}  
}
  $("#trivia").append('<br><br><button id="submit">Submit</button>')
  timer = setInterval(countdown, 1000)   // if we do not have a variable, we cannot clear the interval

  $("#submit").on("click", function() {
  var alldata = $("#trivia").children("input:checked")    
  clearInterval(timer)  
  // stop the timer
 
  for (i=0;i<alldata.length; i++){
    var q = $(alldata[i]).attr("question")
    var r =  $(alldata[i]).attr("res") 
    if (parseInt(questions[q].correctAnswer) === parseInt(r)){
      correct++
      }
    else 
    // if (parseInt(questions[q].correctAnswer) !== parseInt(r)){
      incorrect++
      // }
    // else {
    //   unanswered++
    // }
  }
      console.log("correct: ", correct)
      console.log("incorrect: ", incorrect)
      console.log("unanswered: ", unanswered)
})
}

  function countdown() {
    counter--;
    $("#time-left").text("Time Remaining: " + counter)
   
    if (counter === 0){   
      clearInterval(timer)
      alert("time out")
    }
  }

  //***************************************** */
  //* CHECK IF USER ANSWERS = CORRECT ANSWERS */
  //***************************************** */

  // function answerCheck(answers, container) {
  function answerCheck() {
    for (let i = 0; i < questions.length; i++) {
      if (userChoice === correctAnswer) {       
        correct++;
      }
      else if     
        (userChoice !== correctAnswer) {
        incorrect++;
      }
      else    
        unanswered++;
      } 
}

$("#submit").on("click", function () { 
  $("#correct").text("Correct: " + correct);
  $("#incorrect").text("Incorrect: " + incorrect);
  // $("#unanswered").text("Unanswered: " + unanswered);
});

function reset() {
//reset your counter display here
//reset your counter to 0
}

reset()
showQuestions()