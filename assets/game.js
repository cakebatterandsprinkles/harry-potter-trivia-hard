var isTimerDisplayed = false;
var card = $(".questionArea");
var countStartNumber = 30;
var intervalId;
var questions = [{
        question1: "What is the number of the vault that belongs to Harry at the Gringotts Wizarding Bank?",
        answers: ["394", "713", "547", "687"],
        correctAnswer: "687",
        image: "",
    },
    {
        question2: "what's your name",
        answers: ["1", "2", "3"],
        correctAnswer: "",
        image: "",
    },
    {
        question3: "what's your name",
        answers: ["1", "2", "3"],
        correctAnswer: "",
        image: "",
    },
    {
        question4: "what's your name",
        answers: ["1", "2", "3"],
        correctAnswer: "",
        image: "",
    },
    {
        question5: "what's your name",
        answers: ["1", "2", "3"],
        correctAnswer: "",
        image: "",
    },
    {
        question6: "what's your name",
        answers: ["1", "2", "3"],
        correctAnswer: "",
        image: "",
    },
    {
        question7: "what's your name",
        answers: ["1", "2", "3"],
        correctAnswer: "",
        image: "",
    },
    {
        question8: "what's your name",
        answers: ["1", "2", "3"],
        correctAnswer: "",
        image: "",
    },
    {
        question9: "what's your name",
        answers: ["1", "2", "3"],
        correctAnswer: "",
        image: "",
    },
    {
        question10: "what's your name",
        answers: ["1", "2", "3"],
        correctAnswer: "",
        image: "",
    },
];

var game = {
    correct: 0,
    incorrect: 0,
    currentQuestion: 0,
    counter: countStartNumber,
    countdown: function () {
        counter--
        //decrement counter
        //use jquery to put the counter dynamically into the page
        //if time is up, run time up function
    },
    loadQuestion: function () {
        //set timer
        //timer = setInterval(game.countdown, 1000)
        //dynamically add question into card, card.html("<h2>"+ +"</h2>")
        //for loop
        //run through questions
        //dynamically added answer buttons
    },
    nextQuestion: function () {
        //set counter back to 30
        //game.counter = countStartNumber
        //use jquery to  change the text in the game counter
        //increment currentQuestion by one
        //call loadQuestion function
    },
    timeUp: function () {
        //clearInterval(timer)
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
    }
})

$(".answerButton").on("click", function () {

})

$(".startOverButton").on("click", function () {
    isTimerDisplayed = false;

})