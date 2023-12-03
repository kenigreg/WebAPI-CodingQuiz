//Quiz Questions
const quizQuestions = questions;

let getCurrentTime = document.getElementById("time");
const getQuestionEle = document.getElementById("question-title");
let getChoices = document.getElementById("choices");


document.getElementById("start").addEventListener("click", startQuiz);

let counter = 75;

//function to listen to click event on Start Quiz button
function startQuiz(e) {
    e.preventDefault();
    // Update the count down every 1 second
    const x = setInterval(function () {
        let countTimer = counter--;
         getCurrentTime.innerText = countTimer
        console.log(countTimer);
    
        if (countTimer <= 1) {
          clearInterval(x);
          getCurrentTime.innerText = counter;
        }
    }, 1000);
    

    
}
