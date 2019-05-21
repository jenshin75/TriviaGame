//********************************* */
//* ONCLICK FUNCTION TO START TIMER */
//********************************* */

$("#start").on("click", function () {
  fiveSeconds;
  tenSeconds;
  timeUp;
});

//  after 05 seconds, execute the fiveSeconds function
//  after 10 seconds, execute the tenSeconds function
//  after 15 seconds, execute the timeUp function

setTimeout(fiveSeconds, 1000 * 5);
setTimeout(tenSeconds, 1000 * 10);
setTimeout(timeUp, 1000 * 15);

function fiveSeconds() {
  // in the element with an id of time-left add an h2 saying About 10 Seconds Left!
  // console log 10 seconds left
  $("#time-left").append("<h2>About 10 Seconds Left!</h2>");
  console.log("10 seconds left");
}

function tenSeconds() {
  // in the element with an id of time-left add an h2 saying About 5 Seconds Left!
  // console log 5 seconds left
  $("#time-left").append("<h2>About 5 Seconds Left!</h2>");
  console.log("5 seconds left");
}

function timeUp() {
  // in the element with an id of time-left add an h2 saying Time's Up!
  // console log done
  console.log("done");
  $("#time-left").append("<h2>Time's Up!</h2>");
  console.log("time is up");
}

//****************************************************** */
//* DISPLAY QUESTIONS, RADIO BUTTONS FOR OPTIONS, AND STORE USER CHOICES */
//****************************************************** */

var questions = [
  {
    question: "What is the longest river in the United States?",
    options: { Colorado_River, Missouri_River, Rio_Grande_River },
    correctAnswer: 2
  },
  {
    question: "Death Valley is located in what U.S. state?",
    options: { Nevada, Texas, California },
    correctAnswer: 3
  },
  {
    question: "Pierre is the capital of what U.S. state?",
    options: { South_Dakota, Montana, Rhode_Island },
    correctAnswer: 1
  }
];

var userChoice = "";
var correct = 0;
var incorrect = 0;
var unanswered = 0;

function showQuestions(questions, container) {

  for (let i = 0; i < question.length; i++) {
    // display show questions and radio button choices ??????????????????????????

    // <label class="container">One
    //   <input type="radio" checked="checked" name="radio">
    //   <span class="checkmark"></span>
    // </label>

    // ??????????????????????????????????

    // return userChoice;
  }
}

  //***************************************** */
  //* CHECK IF USER ANSWERS = CORRECT ANSWERS */
  //***************************************** */

  function answerCheck(answers, container) {
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
