var questions = [
    {
        title: "Commonly used data types DO NOT include?",
        choices: ["Strings", "Booleans", "Alerts", "Numbers"],
        answer: "Alerts"
    }, 
    {
        title: "The condition in an if/else statement in enclosed within .. ",
        choices: ["Quotes", "Curly Brackets", "Parentheses", "Square Brackets"],
        answer: "Parentheses"
    },
    {
        title: "Arrays in Javascript can be used to store .. ",
        choices: ["Numbers & Strings", "Other Arrays", "Booleans", "All of the Above"],
        answer: "All of the Above"
    },
    {
        title: "String values must be enclosed within ___ when being assigned to variables.",
        choices: ["Commas", "Curly Brackets", "Quotes", "Parentheses"],
        answer: "Quotes"
    },
    {
        title: "A very useful tool for used during development and debugging for printing content to the debugger is?",
        choices: ["Javascript", "Terminal/Bash", "For Loops", "Console Log"],
        answer: "Console Log"
    },
];

var score = 0;
var questionIndex = 0;

var currentTime = document.querySelector("#current-time");
var timer = document.querySelector("#start");
var questions = document.querySelector("#questions");
var wrapper = document.querySelector("#wrapper");

var secondsLeft = 70;
var holdInterval = 0;
var penalty = 10;
var ulCreate = document.createElement("ul");

timer.addEventListener("click", function () {
    if (holdInterval === 0) {
        holdInterval = setInterval(function(){
            secondsLeft--;
            currentTime.textContent = "Time: " + secondsLeft;

            if (secondsLeft <= 0) {
                clearInterval(holdInterval);
                allDone();
                currentTime.textContent = "Time's Up!";
            }
        }, 1000);
    }
    generate(questions);
});

function generate(questions) {
    questions.innerHTML = "";
    ulCreate.innerHTML = "";

    for (var i = 0; i < questions.length; i++) {
        var userQuestions = questions[questionIndex].title;
        var userChoices = questions[questionIndex].choices;
        questions.textContent = userQuestions;
    }

    userChoices.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        questions.appendChild(ulCreate);
        ulCreate.appendChild(listItem);
        listItem.addEventListener("click", (compare));
    })
}