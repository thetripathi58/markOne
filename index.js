var readlineSync = require("readline-sync");
var score = 0;
var userName = readlineSync.question("What's your name? ");
console.log("Welcome " + userName + " to - DO YOU KNOW Chidanand?");

// data of high score
var highScores = [
   {
    name: "Chidanand's Friend",
    score: 1,
  },
  {
    name: "Chidanand",
    score: 10,
  },
  {
    name: "Jai",
    score: 9.5,
  }
]

// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("Right! Seems like you really know Chidanand.");
    score = score + 1;
  } else {
    console.log("Oops! the correct answer is " + answer);
    console.log("And you call yourself my friend?")
  }

  console.log("Current Score: ", score);
  console.log("-----------------")
}

// array of objects
var questions = [
  {
    question: "Where do I live? ",
    answer: "Ayodhya",
  },
  {
    question: "Which is my favorite series? ",
    answer: "Mirzapur",
  },
  {
    question: "Who is my oldest friend? ",
    answer: "Jai",
  },
  {
    question: "What is my favorite subject? ",
    answer: "Maths",
  },
  
  {
    question: "What is my favorite season? ",
    answer: "Autumn",
  },
  {
    question: "Which is my favorite drink? ",
    answer: "blueberry mojito",
  },
  {
    question: "Here's the last question - Which is my favorite song? ",
    answer: "no song",
  }
]

// loop
for (var i = 0; i < questions.length; i++) {
  play(questions[i].question, questions[i].answer);
}

console.log("YAY! You SCORED: ", score);
console.log("-------------------")

console.log("Check out the high scorers - ");
for (var i = 0; i < highScores.length; i++) {
  console.log(highScores[i].name + ": " + highScores[i].score);
}
console.log("-------------------")

console.log("If you have scored better than the current high scorers then send me a screenshot of your score, so that I can add you to the high scorers list.")
console.log("Thank you for playing!")