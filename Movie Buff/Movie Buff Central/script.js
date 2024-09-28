const questions = [
    {
        question: "What is the name of Harry Potter's owl?",
        choices: ["Hedwig", "Crookshanks", "Scabbers", "Fang"],
        answer: "Hedwig"
    },
    {
        question: "Who says 'I am Iron Man'?",
        choices: ["Thor", "Captain America", "Iron Man", "Hulk"],
        answer: "Iron Man"
    },
   
];
const quotes = [
    "It is our choices, Harry, that show what we truly are, far more than our abilities. – Harry Potter",
    "With great power comes great responsibility. – Spider-Man",
    "Happiness can be found even in the darkest of times, if one only remembers to turn on the light. – Harry Potter",
    "No matter how buried it gets, or lost you feel, you must promise me that you will hold on to hope. – Amazing Spider-Man 2",
    "I solemnly swear that I am up to no good. – Harry Potter"
];

function loadQuiz() {
    const quizContainer = document.getElementById("quiz");
    questions.forEach((q, index) => {
        const questionEl = document.createElement("div");
        questionEl.innerHTML = <p>${q.question}</p>;
        q.choices.forEach(choice => {
            questionEl.innerHTML += `
                <label>
                    <input type="radio" name="question${index}" value="${choice}"> ${choice}
                </label><br>`;
        });
        quizContainer.appendChild(questionEl);
    });
}

function submitQuiz() {
    let score = 0;
    questions.forEach((q, index) => {
        const selectedAnswer = document.querySelector(input[name="question${index}"]:checked);
        if (selectedAnswer && selectedAnswer.value === q.answer) {
            score++;
        }
    });
    alert(You got ${score} out of ${questions.length} correct!);
}

window.onload = loadQuiz;