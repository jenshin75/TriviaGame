var questions = [
  {
    question: "Q1: What is the longest river in the United States?",
    options: [ "Colorado River", "Missouri River", "Rio Grande River", "Lake Michigan" ],
    correctAnswer: 2,
    url: "https://media.giphy.com/media/2jQtHNHA8woyp27Lzg/giphy.gif"
  },
  {
    question: "Q2: Death Valley is located in what U.S. state?",
    options: [ "Nevada", "Texas", "California", "Utah" ],
    correctAnswer: 3,
    url: "https://giphy.com/gifs/61S9lWAlkZg4837zOu"
  },
  {
    question: "Q3: Pierre is the capital of what U. S. state?",
    options: [ "South Dakota", "Montana", "Rhode Island", "New Mexico" ],
    correctAnswer: 1,
    url: "https://giphy.com/gifs/20NhnmyD3QYMrfnTgr"
  }
];

var userChoice = "";
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var timer;
var index = 0;
var counter = 30;
var alldata = [];

// upon clicking start, count down will begin
$("#start").on("click", function () {
  timer = setInterval(countdown, 1000)
  showQuestions()

})

function showQuestions () {

  $("#trivia").empty();

  for (let i = 0; i < questions.length; i++) {
    //*show trivia questions and append them
    $("#trivia").append("<h2>" + questions[ i ].question + "</h2>")


    for (let index = 0; index < questions[ i ].options.length; index++) {

      //*show radio buttons with options 
      $("#trivia").append('<input type="radio" name="' + i + '"  res="' + index + '">' + questions[ i ].options[ index ])
    }
  }

  $("#trivia").append('<br><br><button id="submit">Submit</button>')

  $("#submit").on("click", function () {
    alldata = $("#trivia").children("input:checked")
    clearInterval(timer);
    showResults();
  })

  //store user's choices for each question in "alldata"

}

//*dynamically create/append submit button

// if we do not have a variable, we cannot clear the interval

//when submit button is clicked, check "input" selected

function countdown () {
  counter--;
  $("#time-left").text("Time Remaining: " + counter);

  if (counter === 0) {
    clearInterval(timer)
    showResults()
  }
  // else if
  //   (index === questions.length) {
  //   reset()
  // }
  // else {
  //   showQuestions()
  // }
}

function showResults () {
  console.log(alldata)
  for (i = 0; i < alldata.length; i++) {
    var q = $(alldata[ i ]).attr("name")
    var r = $(alldata[ i ]).attr("res")
    console.log(q, r)

    //split/parse user's question/correct answer to correct question/answer
    if (parseInt(questions[ q ].correctAnswer) === parseInt(r)) {
      correct++;

      // var urlImage = $("<img>");
      // urlImage.attr("src", questions[ index ].url)
      // question.append(urlImage);
      // $("#trivia").append(question)

    }
    else if (parseInt(questions[ q ].correctAnswer) !== parseInt(r)) {
      incorrect++
    }

  }
  
  unanswered = questions.length - correct - incorrect


  console.log("correct: ", correct);
  console.log("incorrect: ", incorrect);
  console.log("unanswered: ", unanswered);

  $("#correct").text("Correct: " + correct);
  $("#incorrect").text("Incorrect: " + incorrect);
  $("#unanswered").text("Unanswered: " + unanswered);
}
function reset () {
  correct = 0;
  incorrect = 0;
  unanswered = 0;
  timer = 0;
  counter = 0;
  index = 0
  countdown = 0;
}