var isTimerDisplayed = false;
var card = $(".questionArea");
var counter = 30;
var intervalId;
var questions = [{
        question: "What is the number of the vault that belongs to Harry at the Gringotts Wizarding Bank?",
        answer: ["394", "713", "547"],
        correctAnswer: "687",
        image: "",
    },
    {
        question: "What was James Potter's position in Quidditch?",
        answer: ["Beater", "Chaser", "Keeper"],
        correctAnswer: "Seeker",
        image: "",
    },
    {
        question: "Which of these is a type of Love Potion?",
        answer: ["Felix Felicis", "Polyjuice Potion", "Veritaserum"],
        correctAnswer: "Amortentia",
        image: "",
    },
    {
        question: "What class did Neville end up teaching at Hogwarts?",
        answer: ["Astronomy", "Muggle Studies", "Charms"],
        correctAnswer: "Herbology",
        image: "",
    },
    {
        question: "Which of these are not one of Hagrid's many pets?",
        answer: ["Fluffy", "Norberta", "Aragog"],
        correctAnswer: "Grawp",
        image: "",
    },
    {
        question: "Who was the original bearer of the cloak of invisibility?",
        answer: ["Harry Potter", "James Potter", "Albus Dumbledore"],
        correctAnswer: "Ignotus Peverell",
        image: "",
    },
    {
        question: "Which of these was not a horcrux of Lord Voldemort?",
        answer: ["Nagini", "The diadem of Rowena Ravenclaw", "Tom Riddle's Diary"],
        correctAnswer: "The sword of Godric Gryffindor",
        image: "",
    },
    {
        question: "What was Dumbledore's sisters name?",
        answer: ["Rita", "Minerva", "Abella"],
        correctAnswer: "Ariana",
        image: "",
    },
    {
        question: "Finish This Quote: 'I open at the...'",
        answer: ["dawn", "light", "end"],
        correctAnswer: "close",
        image: "",
    },
    {
        question: "After all this time?",
        answer: ["Yes", "It never stops", "I still care"],
        correctAnswer: "Always",
        image: "",
    },
];

var game = {
    correct: 0,
    incorrect: 0,
    currentQuestion: 0,
    countdown: function () {
        intervalId = setInterval( function() {
            counter--;
            $("#counter-number").text(counter);
            if(counter <= 0) {
                clearInterval(intervalId);
                timeUp();
            }
        }, 1000);
    },
    loadQuestion: function () {
        for(var i = 0; i < questions.length; i++) {
            $(".questionArea").append(questions.question[i]);
            var answer1 = $("<button>").text(questions.question[i].answer[0]);
            var answer2 = $("<button>").text(questions.question[i].answer[1]);
            var answer3 = $("<button>").text(questions.question[i].answer[2]);
            var answer4 = $("<button>").text(questions.question[i].correctAnswer);
            $(".questionArea").append(answer1, answer2, answer3, answer4);
        }



        //dynamically add question into card, card.html("<h2>"+ +"</h2>")
        //for loop
        //run through questions
        //dynamically added answer buttons
    },
    nextQuestion: function () {
        counter = 30;
        game.countdown();
        //use jquery to  change the text in the game counter
        //increment currentQuestion by one
        //call loadQuestion function
    },
    timeUp: function () {
        
        //change the text in game counter
        //append correct answer to the card
        //append image
    },
    result: function () {
        //clearInterval
        //dynamically change html to view the results
        //append correct answer to the card
        //append image
    },
    clicked: function () {
        //clearInterval
        //if/else statement for an answer clicked
        //if correct, run answeredCorrectly() function
        //else, run answeredIncorrectly() function
    },
    answeredCorrectly: function () {
        //correct++
        //clearInterval
        //dynamically add html to show that the answer is correct
        //add image
        //if no more questions left, show result, else wait for 3 seconds and show the next question
    },
    answeredIncorrectly: function () {
        //incorrect++
        //clearInterval
        //dynamically add html to show that the answer is incorrect
        //add the right answer
        //add image
        //if no more questions left, show result, else wait for 3 seconds and show the next question
    },
    reset: function () {

    }
}

$(".startButton").on("click", function () {
    if (!isTimerDisplayed) {
        $(".timer").prepend('<h2>Time remaining: <span id="counter-number">30</span> seconds</h2>');
        $(".startButton").detach();
        isTimerDisplayed = true;
        game.countdown();
        game.loadQuestion();
    }
})

$(".answerButton").on("click", function () {

})

$(".startOverButton").on("click", function () {
    isTimerDisplayed = false;

})