import {quizQuestion} from "./questions";

const DOMSelectors = {
  quizContainer: document.querySelector(".quiz-container"),
  scoreContainer: document.querySelector(".score-container"),
  submitButton: document.querySelector(".submit-btn"),
};

const init = function () {
  quizQuestion.forEach((item) =>
    DOMSelectors.quizContainer.insertAdjacentHTML(
      "beforeend",
      `
      <div class= "question" id="${item.number}">Number ${item.number}: ${item.question}</div>
      <div class= "answer">
        <label for="${item.choice}">${item.choice.a}</label>
        <input type="radio" name="${item.number}" value="${item.choice.a}"  
      </div>
      <div class= "answer">
        <label for="${item.choice}">${item.choice.b}</label>
        <input type="radio" name="${item.number}" value="${item.choice.b}"  
      </div>
      <div class= "answer">
        <label for="${item.choice}">${item.choice.c}</label>
        <input type="radio" name="${item.number}" value="${item.choice.c}"  
      </div>      
      `
    )
  );
};

const quizResults = function () {
  let score = 0;
  quizQuestion.forEach((question) => {
    const answerSelected = document.querySelector(
      `input[name="${question.number}"]:checked`
    ).value;
    if (answerSelected === `${question.answer}`) {
      score++;
    }
    DOMSelectors.scoreContainer.innerHTML = `<h1>You got ${score} questions correct!</h1>`;
  });
  DOMSelectors.submitButton.addEventListener("click", quizResults);
};

init();
