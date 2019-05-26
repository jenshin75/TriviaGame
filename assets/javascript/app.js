var questions = [
  {
    question: "Q1: What is the longest river in the United States?",
    options: ["Colorado River", "Missouri River", "Rio Grande River", "Lake Michigan"],
    correctAnswer: 2,
    url: "https://media.giphy.com/media/2jQtHNHA8woyp27Lzg/giphy.gif"
  },
  {
    question: "Q2: Death Valley is located in what U.S. state?",
    options: ["Nevada", "Texas", "California", "Utah"],
    correctAnswer: 3,
    url: "https://giphy.com/gifs/61S9lWAlkZg4837zOu"
  },
  {
    question: "Q3: Pierre is the capital of what U. S. state?",
    options: ["South Dakota", "Montana", "Rhode Island", "New Mexico"],
    correctAnswer: 1,
    url: "https://giphy.com/gifs/20NhnmyD3QYMrfnTgr"
  }
];

var userChoice = "";
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var timer;
var counter = 99;
var index = 0;
var countdown = 0;

$("#start").on("click", function(){
});
  //*show trivia questions and append them
  for (let i = 0; i < questions.length; i++) {

    $("#trivia").append("<h2>" + questions[i].question + "</h2>")
      
    for (let index = 0; index < questions[i].options.length; index++) {
   
      $("#trivia").append('<input type="radio" name="' + i + '"  res="' + index + '">' + questions[i].options[index])
    }
  }
    
  //*dynamically create/append submit button
  $("#trivia").append('<br><br><button id="submit">Submit</button>')
  timer = setInterval(countdown, 1000)   // if we do not have a variable, we cannot clear the interval

  //when submit button is clicked, check "input" selected
  $("#submit").on("click", function () {
    var alldata = $("#trivia").children("input:checked")
    clearInterval(timer);
    // stop the timer

    //store user's choices for each question in "alldata"
    for (i = 0; i < alldata.length; i++) {
      var q = $(alldata[i]).attr("name")
      var r = $(alldata[i]).attr("res")
      //split/parse user's question/correct answer to correct question/answer
      if (parseInt(questions[q].correctAnswer) === parseInt(r)) {
        correct++
      }
      else if (parseInt(questions[q].correctAnswer) !== parseInt(r)) {
        incorrect++
      }
      else {
        unanswered++
      }

      console.log("correct: ", correct);
      console.log("incorrect: ", incorrect);
      console.log("unanswered: ", unanswered);
    }

    //count down time left
    function countdown() {
      counter--;
      $("#time-left").text("Time Remaining: " + counter)

      if (counter === 0) {
        clearInterval(timer)
        alert("time out")
      }
    }

    function reset() {
      //reset your counter display here
      //reset your counter to 0
    }

    reset()
    // showQuestions()
  })


// });