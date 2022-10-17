// Business Logic
let questions = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];




/********************************* USER INTERFACE LOGIC *******************************/

    const questionsDiv = document.querySelector(".quiz-container");
    const resultTDiv = document.querySelector('.results-div');
    const submitButton = document.getElementById('submit-div');

    // Div For Question
    const questionDiv = document.getElementById('question');

    // Labels For Answers
    const answerA = document.getElementById('ans_a');
    const answerB = document.getElementById('ans_b');
    const answerC = document.getElementById('ans_c');
    const answerD = document.getElementById('ans_d');

    // Correct  Answer
    let correctAnswer;


    //Variable For CorrectAnswers And QuestionNumber
    let questionNumber = 0;
    let passedAnswer = 0; 
    
    function endGame(){
        const resultTText = document.getElementById('results-div-text');
        resultTText.innerText = `You Answered ${passedAnswer}/${questions.length} Questions Correctly`;
        questionsDiv.style.display = "none";
        resultTDiv.style.display = "block"
    }

    // Click Event For Reloading
    const reloadBtn = document.getElementById('reload-btn');
    reloadBtn.addEventListener("click" , ()=> {
        resultTDiv.style.display = "none"
        questionsDiv.style.display = "block";
        questionNumber = 0;
        passedAnswer = 0;
        changeQuestion();
    });
    // Get Selected Radio Function
    function checkAnswer(){
        let answer;
        const radioButtons = document.querySelectorAll('.answer');
        radioButtons.forEach(e => {
            if(e.checked) {
                answer = e.id;
            }
        })
        return answer;
    };

    // Function For Clearing Fields
    function clearFields(){
        const radioButtons = document.querySelectorAll('.answer');
        radioButtons.forEach(e => {
           e.checked = false;
        });
    };

    changeQuestion()
    function changeQuestion(){
        clearFields();
        if(questionNumber === questions.length) {
            endGame();
        }
        else
        {
            correctAnswer = questions[questionNumber].correct
            questionDiv.innerText = questions[questionNumber].question;
            answerA.innerText = questions[questionNumber].a;
            answerB.innerText = questions[questionNumber].b;
            answerC.innerText = questions[questionNumber].c;
            answerD.innerText = questions[questionNumber].d;
            questionNumber ++;
        }
    };

    // Submit Button
    submitButton.addEventListener("click" , function(){
        const checkAnswerCorrect = checkAnswer();
        if( checkAnswerCorrect === correctAnswer) {
            passedAnswer ++;
        }
        changeQuestion();
    });
    