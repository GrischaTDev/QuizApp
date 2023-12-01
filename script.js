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

function init() {
    document.getElementById('questions-length').innerHTML = questions.length;

    showQuestion();
}

function showQuestion() {
    let question = questions[currentQuestion];

    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function answer(selection) {
    let question = questions[currentQuestion];
    console.log('Selected answer ist', selection);
    console.log('Current question is', question);
}