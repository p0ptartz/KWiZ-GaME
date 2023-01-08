
// create quiz questions/answers/correct answer object

var quizQuestions = [
    {
        question: "Dinosaurs were: ",
        choices: ["BIG", "Old", "Placed on Earth to test Man's faith in God", "Scary :("],
        correctAnswer: "Placed on Earth to test Man's faith in God"
    },
    {
        question: "Donald Trump is: ",
        choices: ["Dumb", "Really, REALLY dumb", "Orange", "America's only hope to stop the baby-eating pedophiliac Elite"],
        correctAnswer: "America's only hope to stop the baby-eating pedophiliac Elite"
    },
    {
        question: "The Earth is: ",
        choices: ["A Moon", "Flat", "A star", "A Planet"],
        correctAnswer: "Flat"
    },
    {
        question: "Obama was: ",
        choices: ["A president", "A nice guy", "Smart", "A blood sucking Reptilian put here to control the weather and cause civil unrest"],
        correctAnswer: "A blood sucking Reptilian put here to control the weather and cause civil unrest"
    }
];

// store variables for query select

var startButton = document.querySelector(".start-button")
var game = document.querySelector(".game")
var directions = document.querySelector(".container")
var timer = document.querySelector(".count")
// variables to select question/answers
var questionElement = document.querySelector("#question")
var choicesList = document.querySelector("#choices");
var enterName = document.querySelector(".enter-name")
// variable to start the index
var currentQuestion = 0;
var count = 60
var countdown;
// setting the timer amount
timer.innerHTML = 60
enterName.classList.add("hide")

// add event listener to remove directions and start quiz/timer
startButton.addEventListener("click", function () {
    countdown = setInterval(function () {
        count--
        timer.innerHTML = count;
        if (count <= 0) {
            endGame();
        }
    }, 1000)

    directions.classList.add("hide");
    game.classList.remove("hide");
    showQuestions();
})

// function to stop the timer countdown
function endGame() {
    clearInterval(countdown);
    choicesList.classList.add("hide")
    questionElement.classList.add("hide")
    enterName.classList.remove("hide")
}

function showQuestions() {
    questionElement.textContent = quizQuestions[currentQuestion].question;

    quizQuestions[currentQuestion].choices.forEach(function (choice) {
        var choiceElement = document.createElement("li");
        choiceElement.textContent = choice;
        choicesList.appendChild(choiceElement)

        choiceElement.addEventListener("click", function () {

            if (currentQuestion === quizQuestions.length - 1) {
                if (choice !== quizQuestions[currentQuestion].correctAnswer) {
                    count -= 10
                    choiceElement.style.backgroundColor = "red";
                } if (choice === quizQuestions[currentQuestion].correctAnswer) {
                    choiceElement.style.backgroundColor = "green";
                }
                setTimeout(function () {
                    endGame();
                }, 700);

            }
            // deduct time if answer is wrong
            else if (choice !== quizQuestions[currentQuestion].correctAnswer) {
                // delay questions from quickly going to next
                setTimeout(function () {
                    count -= 10;
                    choicesList.innerHTML = "";
                    currentQuestion++;
                    showQuestions()
                }, 700);
                // change background color to red
                choiceElement.style.backgroundColor = "red";
            }
            else {
                setTimeout(function () {
                    choicesList.innerHTML = "";
                    currentQuestion++;
                    showQuestions()
                }, 700);
                choiceElement.style.backgroundColor = "green";
            }
        })
    })
}

function evaluate() {

}
















