var timer = document.querySelector('#timer');
var startButton = document.querySelector('#start');
var qContainer = document.querySelector('#quiz-questions');
var highScores = document.querySelector('#highscores');
// Questions are from https://www.interviewbit.com/javascript-mcq/
const questionsArray = [
    {
        question: 'which of the following is not a Javascript data type',
        answers: [
            {choice: 'boolean', correct: false},
            {choice: 'array', correct: false},
            {choice: 'string', correct: false},
            {choice: 'potatoe', correct: true}
        ]
    },
    {
        question: 'javascript is an ______ language',
        answers: [
            {choice: 'Procedural', correct: false},
            {choice: 'Object-based', correct: false},
            {choice: 'Object-Oriented', correct: true},
            {choice: 'none of the above', correct: false}
        ]
    },
    {
        question: 'Which of the following keywords is used to define a variable in Javascript?',
        answers: [
            {choice: 'var', correct: false},
            {choice: 'let', correct: false},
            {choice: 'both var and let', correct: true},
            {choice: 'none of the above', correct: false}
        ]
    },
    {
        question: 'Which of the following methods is used to access HTML elements using Javascript?',
        answers: [
            {choice: 'getElementbyId()', correct: false},
            {choice: 'getElementsByClassName', correct: false},
            {choice: 'Both getElementbyId() and getElementsByClassName', correct: true},
            {choice: 'none of the above', correct: false}
        ]
    },
    {
        question: 'Upon encountering empty statements, what does the Javascript Interpreter do?',
        answers: [
            {choice: 'Throws an error', correct: false},
            {choice: 'Ignores the statements', correct: true},
            {choice: 'Gives a warning', correct: false},
            {choice: 'None of the above', correct: false}
        ]
    }
]