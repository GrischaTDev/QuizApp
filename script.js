let questions = [
    {
        "question": "Was ist die Aufgabe eines Compilers?",
        "answer_1": "Er übersetzt eine Programmiersprache in Maschinencode, den der Computer direkt verstehen kann.",
        "answer_2": "Er testet ein Programm auf Fehler.",
        "answer_3": "Er optimiert ein Programm, um es schneller zu machen.",
        "answer_4": "Er druckt das Programm in einer lesbaren Form aus.",
        "right_answer": 1
    },
    {
        "question": "Welche Programmiersprache wird am häufigsten für die Entwicklung von Websites verwendet?",
        "answer_1": "HTML",
        "answer_2": "CSS",
        "answer_3": "JavaScript",
        "answer_4": "Python",
        "right_answer": 3
    },
    {
        "question": "Was ist der Unterschied zwischen einem Low-Level- und einem High-Level-Programmiersprachen?",
        "answer_1": "Low-Level-Programmiersprachen sind einfacher zu verstehen als High-Level-Programmiersprachen.",
        "answer_2": "High-Level-Programmiersprachen sind näher an der menschlichen Sprache als Low-Level-Programmiersprachen.",
        "answer_3": "Low-Level-Programmiersprachen sind schneller als High-Level-Programmiersprachen.",
        "answer_4": "High-Level-Programmiersprachen sind ressourcenschonender als Low-Level-Programmiersprachen.",
        "right_answer": 2
    },
    {
        "question": "Was ist ein Algorithmus?",
        "answer_1": "Eine Reihe von Schritten, die zur Lösung eines Problems ausgeführt werden.",
        "answer_2": "Eine Datenstruktur, die zum Speichern von Daten verwendet wird.",
        "answer_3": "Eine Programmiersprache, die für die Entwicklung von mobilen Anwendungen verwendet wird.",
        "answer_4": "Eine grafische Benutzeroberfläche, die zum Bedienen von Computern verwendet wird.",
        "right_answer": 1
    },
    {
        "question": "Was ist ein Bug?",
        "answer_1": "Ein Fehler im Quellcode eines Programms, der dazu führt, dass das Programm nicht wie erwartet funktioniert.",
        "answer_2": "Ein Virus, der einen Computer infiziert.",
        "answer_3": "Ein Fehler in der Hardware eines Computers.",
        "answer_4": "Ein Problem mit der Netzwerkverbindung.",
        "right_answer": 1
    }
];

let currentQuestion = 0;
let correctQuestions = 0;
let AUDIO_SUCCESS = new Audio('sounds/success.mp3');
let AUDIO_WRONG = new Audio('sounds/wrong.mp3');

function init() {
    document.getElementById('questions-length').innerHTML = questions.length;

    showQuestion();
}

function showQuestion() {
    // show End Screen
    if(currentQuestion >= questions.length) {
        document.getElementById('finish-quiz').innerHTML = /* html */`
        <div class="end-screen">
            <h1>Herzlichen Glückwunsch <br>Sie haben das Quiz erfolgreich abgeschlossen!</h1>
            <img src="./img/trophy-black.svg" alt="">
            <b>Du hast ${correctQuestions} von ${questions.length} Fragen richtig beantwortet.</b>
            <a href="./"><button onclick="restartGame()" class="btn btn-primary">Nochmal Spielen</button></a>
        </div>
        `;
    } else { // show question
        let percent = (currentQuestion +1) / questions.length;
        percent = Math.round(percent * 100); // Erst wird der inhalt in der klammer ausgrechnet, dann gerundet und dann in die Variable gegeben.
        document.getElementById('progress-bar').innerHTML = `${percent} %`;
        document.getElementById('progress-bar').style = `width: ${percent}%`;

        let question = questions[currentQuestion];
        document.getElementById('current-question').innerHTML = currentQuestion+1;
        document.getElementById('questiontext').innerHTML = question['question'];
        document.getElementById('answer_1').innerHTML = question['answer_1'];
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        document.getElementById('answer_4').innerHTML = question['answer_4'];
    }
}

function answer(selection) {  // Selection hat den Wert den wir über die onclick function im HTML übergeben haben.
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);  // Hier holen wir uns mit slice den letzten Buschstaben"In diesem fall ist es die 1" in die Variable!!!
    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if(selectedQuestionNumber == question['right_answer']) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
        AUDIO_SUCCESS.play();
        correctQuestions++;
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
        AUDIO_WRONG.play();
    }
    document.getElementById('next-button').disabled = false; // Das disable auf dem Button wird zu enable getauscht
}

function nextQuestion() {
    currentQuestion++;
    document.getElementById('next-button').disabled = true;

    resetAnswerButtons()
    showQuestion();
}

function resetAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
}

function restartGame() {
    currentQuestion = 0;
    correctQuestions = 0;
}