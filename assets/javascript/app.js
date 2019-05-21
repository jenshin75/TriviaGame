//********************************* */
//* ONCLICK FUNCTION TO START TIMER */
//********************************* */

$("#start").on("click", function () {
  //fiveSeconds;
  //tenSeconds;
 // timeUp;
});

//  after 05 seconds, execute the fiveSeconds function
//  after 10 seconds, execute the tenSeconds function
//  after 15 seconds, execute the timeUp function

//setTimeout(fiveSeconds, 1000 * 5);
//setTimeout(tenSeconds, 1000 * 10);
//setTimeout(timeUp, 1000 * 15);
//setInterval(countdown, 1000)   //clearinterval

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
    options: ["Colorado_River", "Missouri_River", "Rio_Grande_River"],
    correctAnswer: 2
  },
  {
    question: "Death Valley is located in what U.S. state?",
    options: ["Nevada", "Texas", "California"],
    correctAnswer: 3
  },
  {
    question: "Pierre is the capital of what U.S. state?",
    options: ["South_Dakota", "Montana", "Rhode_Island"] ,
    correctAnswer: 1
  }
];

var userChoice = "";
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var timer;
var counter = 30;



function showQuestions() {

  for (let i = 0; i < questions.length; i++) {

      $("#trivia").append("<h2>" + questions[i].question + "</h2>")

          for (let index = 0; index <  questions[i].options.length; index++) {
         
                $("#trivia").append('<input type="radio" question="' + i + '"  res="' + index + '">' + questions[i].options[index])
  

           
          }
              
   }

       $("#trivia").append('<br><br><button id="submit">Submit</button>')

     timer = setInterval(countdown, 1000)   // if we have not a variable we cant clear the  interval
 


   $("#submit").on("click", function(){

      var alldata = $("#trivia").children("input:checked") 
      clearInterval(timer)
      // stop the timer

      for (i=0;i<alldata.length; i++){
        var q = $(alldata[i]).attr("question")
        var r =  $(alldata[i]).attr("res")
        if (parseInt(questions[q].correctAnswer) === parseInt(r)){
          correct++
        }
        else{
          incorrect++
        }
      }
      console.log("cooorect:", correct)
      console.log("incorrect: ", incorrect)
     

   })
  }

       //set the interval


    /// create the quetsions area in the html

    // usign jquery to create element ith the info and append to the html
    // <h2>  with quetsion
    // the radio button
    // display show questions and radio button choices ??????????????????????????

    // <label class="container">One
    //   <input type="radio" checked="checked" name="radio">
    //   <span class="checkmark"></span>
    // </label>

    // ??????????????????????????????????

    // return userChoice;


  function countdown(){
    counter--
    $("#time-left").text(counter)
    if (counter === 0){
      clearInterval(timer)
      alert("time out")
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

$("#results").on("click", function () {

$("#correct").text(correct);
$("#incorrect").text(incorrect);
$("#unanswered").text(unanswered);

});

function reset() {
//reset your counter display here

//reset your counter to 0

}

reset()
showQuestions()