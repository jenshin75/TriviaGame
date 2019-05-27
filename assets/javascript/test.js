var questions = [
  {
    question: "Q1: What is the longest river in the United States?",
    options: ["Colorado River", "Missouri River", "Rio Grande River", "Lake Michigan"],
    correctAnswer: 1, // MISSOURI RIVER
    url: "https://media.giphy.com/media/2jQtHNHA8woyp27Lzg/giphy.gif"
  },
  {
    question: "Q2: Death Valley is located in what U.S. state?",
    options: ["Nevada", "Texas", "California", "Utah"],
    correctAnswer: 2, // CALIFORNIA
    url: "https://giphy.com/gifs/61S9lWAlkZg4837zOu"
  },
  {
    question: "Q3: Pierre is the capital of what U. S. state?",
    options: ["South Dakota", "Montana", "Rhode Island", "New Mexico"],
    correctAnswer: 1, // MONTANA
    url: "https://giphy.com/gifs/20NhnmyD3QYMrfnTgr"
  }
];

var correct = 0;
var incorrect = 0;
var unanswered = 0;
var timer;
var counter = 30;
var index = 0;
var countdown = 0;

//****************** */
// var question = $("<p>");

// question.append(questions[index].question + "<br>")

// question.append(questions[index].options[index])

// var urlImage = $("<img>");
// urlImage.attr("src", questions[index].url)

// question.append(urlImage);
// $("#trivia").append(question)

//******************* */

$("#start").on("click", function() {

  timer = setInterval(countdown, 1000)

  function showQuestions() {
    //empty q & a section
    $("#trivia").empty();
    
    //*show trivia questions and append them
    for (let i = 0; i < questions.length; i++) {

      $("#trivia").append("<h2>" + questions[i].question + "</h2>")
    }

    for (let index = 0; index < questions[i].options.length; index++) {
      {
        $("#trivia").append('<input type="radio" name="' + i + '"  res="' + index + '">' + questions[i].options[index])
      }

      //store user's choices for each question in "alldata"
      for (i = 0; i < alldata.length; i++) {
        var q = $(alldata[i]).attr("name")
        var r = $(alldata[i]).attr("res")
        //split/parse user's question/correct answer to correct question/answer
        if (parseInt(questions[q].correctAnswer) === parseInt(r)) {
          correct++;
          console.log("correct: ", correct);
        }
        else if (parseInt(questions[q].correctAnswer) !== parseInt(r)) {
          incorrect++;
          console.log("incorrect: ", incorrect);
         }
        else {
          unanswered++;
          console.log("unanswered: ", unanswered);
        }

        $("#correct").text("Correct: " + correct);
        $("#incorrect").text("Incorrect: " + incorrect);
        $("#unanswered").text("Unanswered: " + unanswered);

      }
      //*dynamically create/append submit button
      $("#trivia").append('<br><br><button id="submit">Submit</button>')

      //when submit button is clicked, check "input" selected
      $("#submit").on("click", function () {
        var alldata = $("#trivia").children("input:checked")
        clearInterval(timer);
        // stop the timer

        //count down time left
        function countdown() {
          counter--;
          $("#time-left").text("Time Remaining: " + counter);

          if (counter === 0) {
            clearInterval(timer);
            alert("time out")
          }
          else if
            (index === questions.length) {
            reset()
          }
          else {
            showQuestions()
          }
        }

        function reset() {
          correct = 0;
          incorrect = 0;
          unanswered = 0;
          timer = 0;
          counter = 0; 
          index = 0
          countdown = 0;
        }

