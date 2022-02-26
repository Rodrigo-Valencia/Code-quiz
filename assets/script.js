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
var highScore = document.querySelector("#high-score");
var reset = document.querySelector("#reset");
var returN = document.querySelector("#return"); 


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

function compare(event) {
    var element = event.target;
    if (element.matches("li")) {
        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");

        if (element.textContent == questions[questionIndex].answer) {
            score++;
            createDiv.textContent = "Corrent! The answer is: " + questions[questionIndex].answer;
        } else {
            secondsLeft = secondsLeft - penalty;
            createDiv.textContent = "Wrong! The correct answer is: " + questions[questionIndex].answer;
        }
    }
    questionIndex++;
    if (questionIndex >= questions.length) {
        allDone();
        createDiv.textContent = "End of quiz!" + " " + "You got " + score + "/" + questions.length + " Correct!";
    } else {
        generate(questionIndex);
    }
    questions.appendChild(createDiv);
}

function allDone() {
    questions.innerHTML = "";
    currentTime.innerHTML = "";

    var createH1 = document.createElement("h1");
    createH1.setAttribute("id", "createH1");
    createH1.textContent = "All Done!"

    questions.appendChild(createH1);

    var createP = document.createElement("p");
    createP.setAttribute("id", "createP");
    
    questions.appendChild(createP);

    if (secondsLeft >= 0) {
        var timeRemaining = secondsLeft;
        var createP2 = document.createElement("p");
        clearInterval(holdInterval);
        createP.textContent = "Your final score is: " + timeRemaining;

        questions.appendChild(createP2);
    }

    var createLabel = document.createElement("label");
    createLabel.setAttribute("id", "createLabel");
    createLabel.textContent = "Enter your initials: ";

    questions.appendChild(createLabel);

    var createInput = document.createElement("input");
    createInput.setAttribute("type", "text");
    createInput.setAttribute("id", "initials");
    createInput.textContent = "";

    questions.appendChild(createInput);

    var createSubmit = doucment.createElement("button");
    createSubmit.setAttribute("type", "submit");
    createSubmit.setAttribute("id", "submit");
    createSubmit.textContent = "Submit";

    questions.appendChild(createSubmit);

    createSubmit.addEventListener("click", function() {
        var inistals = createInput.value;
        if (initails === null) {
            console.log("No value entered! Please try again.");
        } else {
            var finalScore = {
                initials: initials,
                score: timeRemaining
            }
            console.log(finalScore);
            var allScores = localStorage.getItem("allScores");
            if (allScores === null) {
                allScores = [];
            } else {
                allScores = JSON.parse(allScore);
            }
            allScores.push(finalScore);
            var newScore = JSON.stringify(allScores);
            localStorage.setItem("allScores", newScore);

            //window.location.replace("./highscores.html");
        }
    });
}


// Highscores
reset.addEventListener("click", function(){
    localStorage.clear();
    location.reload();
});

var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);

if (allScores !== null) {
    for (var i = 0; i < allScores.length; i++) {
        var createLi = document.createElement("li");
        createLi.textContent = allScores[i].initials + " " + allScores[i].score;
        highScore.appendChild(createLi);
    }
}

returN.addEventListener("click", function(){
    //window.location.replace("./index.html");
});