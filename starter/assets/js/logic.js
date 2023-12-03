//Quiz Questions
const quizQuestions = questions;

//Element Variables
let getCurrentTime = document.getElementById("time");
const getQuestionEle = document.getElementById("question-title");
let getChoices = document.getElementById("choices");
let displayQuestions = document.getElementById("questions");

//create an ol element and append to the DIV element
const orderList = document.createElement("ol");
getChoices.appendChild(orderList);



//Event Listener for startQuiz Button
document.getElementById("start").addEventListener("click", startQuiz);

let counter = 75;

//function to listen to click event on Start Quiz button
function startQuiz() {
    // Update the count down every 1 second
    const x = setInterval(function () {
        let countTimer = counter--;
         getCurrentTime.innerText = countTimer
        //console.log(countTimer);
    
        if (countTimer <= 0) {
          clearInterval(x);
          getCurrentTime.innerText = 75;
        }
    }, 1000);
    displayQuizQuestions();
};

function displayQuizQuestions() {
    let index = Math.floor(Math.random() * quizQuestions.length);

    getQuestionEle.textContent = quizQuestions[index].word

    quizQuestions[index].answerOptions.forEach((option, j) => {
        const itemList = document.createElement("li");
        itemList.setAttribute("id", j);
        itemList.textContent = option;
        orderList.appendChild(itemList);
    });  
    displayQuestions.setAttribute("class", "block");
};
