const questions = [
    {
        question: "What is the input device that controls a cursor in a display?",
        image: "mouse1.jpg",
        wrongImage: "mouse2.jpg",
        answers: [
            { text: "Mouse", correct: true },
            { text: "Mousepad", correct: false },
            { text: "Keyboard", correct: false },
            { text: "Monitor", correct: false }
        ]
    },
    {
        question: "Which output device generates sound?",
        image: "speaker.jpg",
        wrongImage: "images/wrong.jpg",
        answers: [
            { text: "Speaker", correct: true },
            { text: "Microphone", correct: false },
            { text: "Graphics Card", correct: false },
            { text: "Motherboard", correct: false }
        ]
    },
    {
        question: "Which device allows a computer to run briefly after power loss?",
        image: "ups.jpg",
        wrongImage: "images/wrong.jpg",
        answers: [
            { text: "UPS", correct: true },
            { text: "CPU", correct: false },
            { text: "HDD/SSD", correct: false },
            { text: "Power Supply", correct: false }
        ]
    },
    {
        question: "Which component is considered the brain of the computer?",
        image: "cpu.jpg",
        wrongImage: "images/wrong.jpg",
        answers: [
            { text: "Hard Drive", correct: false },
            { text: "RAM", correct: false },
            { text: "CPU", correct: true },
            { text: "Graphics Card", correct: false }
        ]
    },
    {
        question: "Which language is used for styling web pages?",
        image: "css.jpg",
        wrongImage: "images/wrong.jpg",
        answers: [
            { text: "CSS", correct: true },
            { text: "HTML", correct: false },
            { text: "JavaScript", correct: false },
            { text: "Python", correct: false }
        ]
    },
    {
        question: "What is the full form of HTML?",
        image: "html.jpg",
        wrongImage: "images/wrong.jpg",
        answers: [
            { text: "HyperText Markup Language", correct: true },
            { text: "HighText Machine Language", correct: false },
            { text: "HyperTabular Markup Language", correct: false },
            { text: "None of the above", correct: false }
        ]
    },
    {
        question: "Which language is used to create interactive web pages?",
        image: "javascript.jpg",
        wrongImage: "images/wrong.jpg",
        answers: [
            { text: "JavaScript", correct: true },
            { text: "Python", correct: false },
            { text: "C++", correct: false },
            { text: "Java", correct: false }
        ]
    },
    {
        question: "What does CPU stand for?",
        image: "cpu.jpg",
        wrongImage: "images/wrong.jpg",
        answers: [
            { text: "Central Processing Unit", correct: true },
            { text: "Computer Personal Unit", correct: false },
            { text: "Central Process Utility", correct: false },
            { text: "Computer Processing Unit", correct: false }
        ]
    },
    {
        question: "Which of the following is a programming language?",
        image: "python.jpg",
        wrongImage: "images/wrong.jpg",
        answers: [
            { text: "Python", correct: true },
            { text: "HTML", correct: false },
            { text: "CSS", correct: false },
            { text: "HTTP", correct: false }
        ]
    },
    {
        question: "What does RAM stand for?",
        image: "ram.jpg",
        wrongImage: "images/wrong.jpg",
        answers: [
            { text: "Random Access Memory", correct: true },
            { text: "Readily Available Memory", correct: false },
            { text: "Randomized Access Memory", correct: false },
            { text: "Run Access Memory", correct: false }
        ]
    },
    {
        question: "Which device is used to store permanent data?",
        image: "hdd.jpg",
        wrongImage: "images/wrong.jpg",
        answers: [
            { text: "Hard Drive", correct: true },
            { text: "RAM", correct: false },
            { text: "Cache", correct: false },
            { text: "CPU", correct: false }
        ]
    },
    {
        question: "Which technology is used for wireless communication?",
        image: "wifi.jpg",
        wrongImage: "images/wrong.jpg",
        answers: [
            { text: "Wi-Fi", correct: true },
            { text: "Ethernet", correct: false },
            { text: "USB", correct: false },
            { text: "Fiber Optic", correct: false }
        ]
    },
    {
        question: "Which company developed the Windows operating system?",
        image: "microsoft.jpg",
        wrongImage: "images/wrong.jpg",
        answers: [
            { text: "Microsoft", correct: true },
            { text: "Apple", correct: false },
            { text: "Google", correct: false },
            { text: "IBM", correct: false }
        ]
    },
    {
        question: "Which one is a popular open-source operating system?",
        image: "linux.jpg",
        wrongImage: "images/wrong.jpg",
        answers: [
            { text: "Linux", correct: true },
            { text: "Windows", correct: false },
            { text: "macOS", correct: false },
            { text: "Solaris", correct: false }
        ]
    },
    {
        question: "What is the main function of a graphics card?",
        image: "gpu.jpg",
        wrongImage: "images/wrong.jpg",
        answers: [
            { text: "Render images to display", correct: true },
            { text: "Store data", correct: false },
            { text: "Process CPU instructions", correct: false },
            { text: "Provide power", correct: false }
        ]
    },
    {
        question: "Which of these is a web browser?",
        image: "chrome.jpg",
        wrongImage: "images/wrong.jpg",
        answers: [
            { text: "Google Chrome", correct: true },
            { text: "Microsoft Word", correct: false },
            { text: "Adobe Photoshop", correct: false },
            { text: "Notepad", correct: false }
        ]
    },
    // Dagdag na 4 na tanong
    {
        question: "What is the primary circuit board of a computer called?",
        image: "motherboard.jpg",
        wrongImage: "images/wrong.jpg",
        answers: [
            { text: "Motherboard", correct: true },
            { text: "CPU", correct: false },
            { text: "RAM", correct: false },
            { text: "GPU", correct: false }
        ]
    },
    {
        question: "Which port is commonly used to connect smartphones for charging and data transfer?",
        image: "usb.jpg",
        wrongImage: "images/wrong.jpg",
        answers: [
            { text: "USB", correct: true },
            { text: "HDMI", correct: false },
            { text: "Ethernet", correct: false },
            { text: "VGA", correct: false }
        ]
    },
    {
        question: "Which company developed the Android operating system?",
        image: "android.jpg",
        wrongImage: "images/wrong.jpg",
        answers: [
            { text: "Google", correct: true },
            { text: "Apple", correct: false },
            { text: "Microsoft", correct: false },
            { text: "Samsung", correct: false }
        ]
    },
    {
        question: "What does SSD stand for?",
        image: "ssd.jpg",
        wrongImage: "images/wrong.jpg",
        answers: [
            { text: "Solid State Drive", correct: true },
            { text: "Super Speed Disk", correct: false },
            { text: "Standard Storage Device", correct: false },
            { text: "Solid Storage Device", correct: false }
        ]
    }
];

const questionElement = document.getElementById("question");
const questionImage = document.getElementById("question-image");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const introMusic = new Audio("intro.mp3");
const correctSound = new Audio("correct.mp3");
const wrongSound = new Audio("wrong.mp3");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    introMusic.play();
    currentQuestionIndex = 0;
    score = 0;
    nextButton.textContent = "Next";
    nextButton.style.display = "none";
    questionImage.style.display = "none";
    showQuestion();
}

document.addEventListener("DOMContentLoaded", () => {
    const introVideo = document.getElementById("intro-video");
    introVideo.muted = true;
});

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];

    questionElement.textContent = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;
    questionImage.src = "";
    questionImage.style.display = "none";

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.textContent = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    questionImage.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    let currentQuestion = questions[currentQuestionIndex];

    if (isCorrect) {
        selectedBtn.classList.add("correct");
        correctSound.play();
        score++;
        questionImage.src = currentQuestion.image;
    } else {
        selectedBtn.classList.add("incorrect");
        wrongSound.play();
        questionImage.src = currentQuestion.wrongImage;
    }
    questionImage.style.display = "block";

    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.textContent = `You scored ${score} out of ${questions.length}!`;

    if (score === questions.length) {
        questionImage.src = "perfect.jpg";
    } else if (score > questions.length / 2) {
        questionImage.src = "good.jpg";
    } else {
        questionImage.src = "bad.jpg";
    }

    questionImage.style.display = "block";
    nextButton.textContent = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();
