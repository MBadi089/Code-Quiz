//GIVEN I am taking a code quiz
//------------------------global variables-------------------------//

var countDownTimer ;     //this will keep track of the timer
var secondsLeft = 75;    // this will keep the number of seconds left on the clock
var questionIndex = 0;    //this will keep track of the question the user is  (index)
                         //create an adEventListner for the index to move the index when clicked
var correctAnswers = 0;  //will keep track of the correct answers
var score = 0;           //this will keep track of the users score

//---------------------End of global variables---------------------//



//----------------------startGame function-------------------------//
function startGame () {
 startQuizTimer()
 displayQuestionsUI()
 checkAnswers()
 gameOver()
}
//-------------------End of startGame function---------------------//

//---------------------startQuizTimer function---------------------//
function startQuizTimer() {
//WHEN I click the start button
//THEN a timer starts and I am presented with a question

   countDownTimer =  setInterval(function() {
       
    secondsLeft--;
    document.querySelector('#timer > h3').textContent = 'Time: ' +  secondsLeft;

    if(secondsLeft === 0) {
        clearInterval(countDownTimer)
        alert('The timer has ran out!')

        //call function for score and endgame stuff
    }
   }, 1000);
}
//-----------------End of startQuizTimer function-----------------//

//----------------------quizQuestions function--------------------//
function quizQuestions () {
var questions = [
//A multidimensional array with 5 inner array elements with 7 elements inside them 
 //---------------------------question 1--------------------//   
    {
        question: "Commonly used data types DO Not Include:_____.",
        choiceA: "1. strings",
        choiceB: "2. booleans",
        choiceC: "3. alerts",
        choiceD: "4. numbers",
        correctAnswer: "choiceC"
    },
//---------------------------question 2--------------------//    
    {
        question: "The condition in an if/else statement is enclosed with____.",
        choiceA: "1. quotes",
        choiceB: "2. curly brackets",
        choiceC: "3. parenthesis",
        choiceD: "4. square brackets",
        correctAnswer: "choiceC"
    },
    
//---------------------------question 3-------------------//
    {
        question: "Arrays in JavaScript can be used to store _____.",
        choiceA: "1. numbers and strings",
        choiceB: "2. other arrays",
        choiceC: "3. booleans",
        choiceD: "4. all of the above",
        correctAnswer: "choiceD"
    },

//---------------------------question 4-------------------//
    {
        question: "String values must be enclosed within_____when being assigned to variables.",
        choiceA: "1. commas",
        choiceB: "2. curly brackets",
        choiceC: "3. quotes",
        choiceD: "4. parenthesis",
        correctAnswer: "choiceC"
    },

//---------------------------question 5------------------//
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choiceA: "1. JavaScript",
        choiceB: "2. terminal/bash",
        choiceC: "3. for loops",
        choiceD: "4. console.log",
        correctAnswer: "choiceD"
    },    
];

questions[questionIndex];

 //add eventlistner to each question
choiceA.addEventListener("click", checkAnswers);
choiceB.addEventListener("click", checkAnswers);
choiceC.addEventListener("click", checkAnswers);
choiceD.addEventListener("click", checkAnswers);
}
//-------------------End of quizQuestions function----------------//

//-------------------displayQuestionsUI function------------------//
function displayQuestionsUI () {
//displays questions to the user
//variable to store the HTML output
//create an element for questions
var quizQuestion = document.createElement('div');
var questionLabel = document.createElement("h1");
questionLabel.className = "question";
questionLabel.textContent = questions[questionIndex].question;
quizQuestion.appendChild(questionLabel);
document.body.appendChild(quizQuestion);

//create an element for choices
var quizChoices = document.createElement('div');
var choicesLabel = document.createElement('li');
choicesLabel.className = "choices";

//creates buttons for choices
var choiceA = document.createElement("button");
var choiceB = document.createElement("button");
var choiceC = document.createElement("button");
var choiceD = document.createElement("button");

//create textContent for each choice
choicesLabel.textContent = questions[questionIndex].choiceA;
choicesLabel.textContent = questions[questionIndex].choiceB;
choicesLabel.textContent = questions[questionIndex].choiceC;
choicesLabel.textContent = questions[questionIndex].choiceD;

//append each choices
quizChoices.appendChild(choicesLabel);
quizChoices.appendChild(choiceA);
quizChoices.appendChild(choiceB);
quizChoices.appendChild(choiceC);
quizChoices.appendChild(choiceD);
document.body.appendChild(quizChoices);


//WHEN I answer a question
//THEN I am presented with another question

}
//----------------End of displayQuestionsUI function--------------//


//-------------------questionPenality function--------------------//
function checkAnswers () {
//WHEN I answer a question INCORRECTLY
//THEN TIME is SUBTRACTED from the CLOCK
quizQuestions()

var userChoice = true; 
if (!userChoice === correctAnswers) {
    secondsLeft = secondsLeft - 10;
    result.innerHTML = "wrong!";    
    }
else {
    result.innerHTML = "correct";
}
console.log(userChoice);
}
//this will increment the questions in the array to move to the next question
questionIndex++;
//-----------------End of questionPenality function--------------//

//----------------------gameOver Function------------------------//
function gameOver () {
//WHEN all questions are answered or the timer reaches 0
//THEN the game is over (<--this code is in startQuizTimer function)    
//WHEN the game is over
//THEN I can save my initials and score 

//display final score and have user input initials

//example for this part of the section
//localStorage
var submitButton = document.querySelector("#submit");

//localStorage.setItem()
submitButton.addEventListener("click", function(event) {
    event.preventDefault();

    var userInitials = {
        initials: usernameElement.value,
    }

    localStorage.setItem("user", JSON.stringify(user));
});

//localStorage.getItem()
var localData = JSON.parse(localStorage.getItem("user"));
console.log(localData);

usernameElement.value = localData.username;
emailElement.value = localData.email;


}
//add a function at the end of this block of code ^

//-----------------End of gameOver Function----------------------//

//-----------------------addevent listner------------------------//
document.getElementById("startQuiz").addEventListener("click", startGame);