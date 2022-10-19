const quizForm = document.querySelector(".quiz-form");
const checkScore = document.querySelector("#check-score");
const showResult = document.querySelector("#show-result");

const rightAnswer = ["90°","right angled", "isosceles", "equal","60°", "hypotenuse"];

function calculateScore() {
    let score = 0;
    let i = 0;
    const formResult = new FormData(quizForm);
    for(let value of formResult.values()){
        if(value === rightAnswer[i]){
            score = score + 1;
        }
        i = i + 1;
    }
    showResult.innerText = "your score is "+score;
}

checkScore.addEventListener('click',calculateScore );