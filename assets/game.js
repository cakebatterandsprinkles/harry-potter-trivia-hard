var isTimerDisplayed = false;
var card = $(".questionArea");
var counter = 31;
var intervalId;
var questions = [{
        question: "What is the number of the vault that belongs to Harry at the Gringotts Wizarding Bank?",
        answer: ["394", "687", "713", "547"],
        correctAnswer: "687",
        image: "gringotts.jpg",
    },
    {
        question: "What was James Potter's position in Quidditch?",
        answer: ["Beater", "Chaser", "Seeker", "Keeper"],
        correctAnswer: "Seeker",
        image: "quidditch.jpg",
    },
    {
        question: "Which of these is a type of Love Potion?",
        answer: ["Amortentia", "Felix Felicis", "Polyjuice Potion", "Veritaserum"],
        correctAnswer: "Amortentia",
        image: "potions.jpg",
    },
    {
        question: "What class did Neville end up teaching at Hogwarts?",
        answer: ["Astronomy", "Herbology", "Muggle Studies", "Charms"],
        correctAnswer: "Herbology",
        image: "neville.jpg",
    },
    {
        question: "Which of these are not one of Hagrid's many pets?",
        answer: ["Fluffy", "Norberta", "Grawp", "Aragog"],
        correctAnswer: "Grawp",
        image: "hagrid.jpg",
    },
    {
        question: "Who was the original bearer of the cloak of invisibility?",
        answer: ["Harry Potter", "James Potter", "Albus Dumbledore", "Ignotus Peverell"],
        correctAnswer: "Ignotus Peverell",
        image: "cloak.jpg",
    },
    {
        question: "Which of these was not a horcrux of Lord Voldemort?",
        answer: ["Nagini", "The diadem of Rowena Ravenclaw", "The sword of Godric Gryffindor", "Tom Riddle's Diary"],
        correctAnswer: "The sword of Godric Gryffindor",
        image: "voldemort.jpg",
    },
    {
        question: "What was Dumbledore's sisters name?",
        answer: ["Ariana", "Rita", "Minerva", "Abella"],
        correctAnswer: "Ariana",
        image: "ariana-dumbledore.jpg",
    },
    {
        question: "Finish This Quote: 'I open at the...'",
        answer: ["dawn", "close", "light", "end"],
        correctAnswer: "close",
        image: "snitch.jpg",
    },
    {
        question: "After all this time?",
        answer: ["Yes", "It never stops", "Always", "I still care"],
        correctAnswer: "Always",
        image: "always.jpg",
    },
];

var game = {
    correct: 0,
    incorrect: 0,
    currentQuestion: 0,
    answerClicked: false,
    countdown: function () {
        intervalId = setInterval(function () {
            counter--;
            $("#counter-number").text(counter);
            if (counter <= 0) {
                clearInterval(intervalId);
                game.timeUp();
            }
        }, 1000);
    },
    loadQuestion: function () {

        game.answerClicked = false;

        $(".questionArea").empty();

        $(".questionArea").append(questions[game.currentQuestion].question).addClass("lead p-3 text-center");
        var answer1 = $("<button>").text(questions[game.currentQuestion].answer[0]).addClass("btn btn-outline-dark btn-block");
        var answer2 = $("<button>").text(questions[game.currentQuestion].answer[1]).addClass("btn btn-outline-dark btn-block");
        var answer3 = $("<button>").text(questions[game.currentQuestion].answer[2]).addClass("btn btn-outline-dark btn-block");
        var answer4 = $("<button>").text(questions[game.currentQuestion].answer[3]).addClass("btn btn-outline-dark btn-block");
        $(".questionArea").append(answer1, answer2, answer3, answer4);

        $(".questionArea button").on("click", game.clicked)

        $(".question-image").attr("src", "assets/images/" + questions[game.currentQuestion].image);

        //dynamically add question into card, card.html("<h2>"+ +"</h2>")
        //for loop
        //run through questions
        //dynamically added answer buttons
    },
    nextQuestion: function () {
        game.currentQuestion++;
        counter = 31;
        game.countdown();
        game.loadQuestion();
        //use jquery to  change the text in the game counter
        //increment currentQuestion by one
        //call loadQuestion function
    },
    timeUp: function () {
    
        $("#counter-number").text("Your time is up!");

        if (game.currentQuestion === questions.length - 1) {
            game.result();
        } else {
            setTimeout(game.nextQuestion, 1000);
        }

        //change the text in game counter
        //append correct answer to the card
        //append image
    },
    result: function () {
        clearInterval(intervalId);

        $(".questionArea").empty();
        $(".questionArea").removeClass("p-3");
        
        var results = $("<h2>").text("You had " + game.correct + " correct and " + game.incorrect + " incorrect answers.");

        $(".question-image").attr("src", "");
        $(".timer").empty();
        $(".timer").append(results);

        //clearInterval
        //dynamically change html to view the results
        //append correct answer to the card
        //append image
    },
    clicked: function (ev) {
        clearInterval(intervalId);

        if (!game.answerClicked) {

            game.answerClicked = true;

            var correctAnswer = questions[game.currentQuestion].correctAnswer;
            var clickedAnswer = ev.target.innerText;

            if (correctAnswer === clickedAnswer) {
                game.answeredCorrectly(ev.target);
            } else {
                game.answeredIncorrectly(ev.target);
            }

            if (game.currentQuestion === questions.length - 1) {
                game.result();
                isTimerDisplayed = false;
                var startOverButton = $("<button>").text("Start Over?").addClass("btn btn-lg btn-success btn-block startOverButton");
                $(".questionArea").empty();
                $(".questionArea").append(startOverButton);
                $(".startOverButton").on("click", function () {  
                    game.reset();
                    game.loadQuestion();
                    game.countdown();
                })
            } else {
                setTimeout(game.nextQuestion, 3000);
            }

        }
        //clearInterval
        //if/else statement for an answer clicked
        //if correct, run answeredCorrectly() function
        //else, run answeredIncorrectly() function
    },
    answeredCorrectly: function (elem) {
        game.correct++;
        clearInterval(intervalId);

        $(".question-image").attr("src", "assets/images/snape.gif");

        elem.classList.add("btn-success")
        elem.classList.remove("btn-outline-dark");
        //correct++
        //clearInterval
        //dynamically add html to show that the answer is correct
        //add image
        //if no more questions left, show result, else wait for 3 seconds and show the next question
    },
    answeredIncorrectly: function (elem) {
        game.incorrect++;
        clearInterval(intervalId);
        elem.classList.add("btn-danger");
        elem.classList.remove("btn-outline-dark");

        $(".question-image").attr("src", "assets/images/giphy.gif");

        setTimeout(function () {
            var correctAnswer = questions[game.currentQuestion].correctAnswer;
            $(".questionArea button").each(function (index, el) {
                if (el.innerText === correctAnswer) {
                    el.classList.add("btn-success")
                    el.classList.remove("btn-outline-dark");
                }
            });
        }, 500);

        //incorrect++
        //clearInterval
        //dynamically add html to show that the answer is incorrect
        //add the right answer
        //add image
        //if no more questions left, show result, else wait for 3 seconds and show the next question
    },
    reset: function () {
        counter = 31;
        game.correct = 0;
        game.incorrect = 0;
        game.currentQuestion = 0;
        isTimerDisplayed = false;
        $(".timer").empty();
        $(".timer").prepend('<h2>Time remaining: <span id="counter-number">30</span> seconds</h2>');
    },

}

$(".startButton").on("click", function () {
    if (!isTimerDisplayed) {
        $(".timer").prepend('<h2>Time remaining: <span id="counter-number">30</span> seconds</h2>');
        $(".startButton").detach();
        isTimerDisplayed = true;
        game.countdown();
        game.loadQuestion();
    }
});

