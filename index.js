let question = [
    {
        question: "What is the capital City of KPK",
        answer: [
            { text: "Peshawar", correct: true },
            { text: "Mardan", correct: false },
            { text: "Charsadda", correct: false },
            { text: "DI Khan", correct: false },
        ]
    },
    {
        question: "What is the current PM of Pakistan",
        answer: [
            { text: "Asif Ali Zardari", correct: false },
            { text: "Imran Khan", correct: false },
            { text: "Shahbaz Sharif", correct: true },
            { text: "Nawaz Sharif", correct: false },
        ]
    },
    {
        question: "What is the Height of K2",
        answer: [
            { text: "8611", correct: true },
            { text: "8612", correct: false },
            { text: "8112", correct: false },
            { text: "9111", correct: false },
        ]
    },
    {
        question: "What is the capital City of KPK",
        answer: [
            { text: "Peshawar", correct: true },
            { text: "Mardan", correct: false },
            { text: "Charsadda", correct: false },
            { text: "DI Khan", correct: false },
        ]
    },
];

let QuestionElement = document.getElementById("question");
let AnswerBtn = document.querySelector("#answer-button");
let NextBtn = document.querySelector(".next-btn");
let Score = 0;
let CurrentQuestionIndex = 0;

function QuizStart() {
    CurrentQuestionIndex = 0;
    Score = 0;
    NextBtn.innerHTML = "Next";
    Showquestion();
}

function Showquestion() {
    resetState();
    let currentQuestion = question[CurrentQuestionIndex];
    let questionNumber = CurrentQuestionIndex + 1;

    QuestionElement.innerHTML = questionNumber + ". " + currentQuestion.question;

    currentQuestion.answer.forEach(answer => {
        let button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");

        AnswerBtn.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
    });
}

function resetState() {
    NextBtn.style.display = "none";
    while (AnswerBtn.firstChild) {
        AnswerBtn.removeChild(AnswerBtn.firstChild);
    }
}

function selectAnswer(e) {
    let selectBtn = e.target;
    let isCorrect = selectBtn.dataset.correct === "true";
    if (isCorrect) {
        selectBtn.classList.add("correct");
        Score++;
    } else {
        selectBtn.classList.add("incorrect");
    }
    Array.from(AnswerBtn.children).forEach(button => {
        button.disabled = true;
    });
    NextBtn.style.display = "block";
}

function showScore() {
    resetState();
    QuestionElement.innerHTML = `Your score is ${Score} out of ${question.length}!`;
    NextBtn.innerHTML = "Play Again";
    NextBtn.style.display = "block";
}

function handleNextButton() {
    CurrentQuestionIndex++;
    if (CurrentQuestionIndex < question.length) {
        Showquestion();
    } else {
        showScore();
    }
}

NextBtn.addEventListener('click', () => {
    if (CurrentQuestionIndex < question.length) {
        handleNextButton();
    } else {
        QuizStart();
    }
});

QuizStart();
