const questions=[
    {
        question:" Who is the topper student of b.tech(cse) ?",
        answers:[
            {text:"Duragpal Singh",correct:true},
            {text:"Divayanshi Rastogi",correct:false},
            {text:"Shivansh",correct:false},
            {text:"Utkarsh Gupta",correct:false},

        ]
    },
    {
    question:" Who is the DC of B.tech. section B ?",
    answers:[
        {text:"Anoop gangwar",correct:false},
        {text:"Naman",correct:false},
        {text:"Umair Qureshi",correct:true},
        {text:"Utkarsh Gupta",correct:false},

    ]
},

{
    question:" Who is the CR of B.tech. section B ?",
    answers:[
        {text:"Kamlesh kumar",correct:false},
        {text:"Ashish Singh",correct:false},
        {text:"Pallabi patel",correct:false},
        {text:"Prashant maurya",correct:true},

    ]
},
{
    question:" Who is the Dean of Invertis university?",
    answers:[
        {text:"Mr.KK dubey",correct:false},
        {text:"Mr.Rk shukla",correct:true},
        {text:"Mr.Umesh gautam",correct:false},
        {text:"Mr.parth Gautam",correct:false},

    ]
},
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex=0;
let score = 0;

function startQuiz(){
currentQuestionIndex=0;
score = 0;
nextButton.innerHTML="Next";
showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button =document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });

}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }


}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect =selectedBtn.dataset.correct ==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct=="true"){
            button.classList.add("correct");

        }
        button.disabled=true;
    });
    nextButton.style.display="block";
}

    function showScore(){
        resetState();
        questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
        nextButton.innerHTML = "PlayAgain";
        nextButton.style.display = "block";


    }

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();

    }else{
        showScore();
    }
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
       handleNextButton();
    }else{
        startQuiz();
    }
});
startQuiz();
