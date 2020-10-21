
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
      <h1 class= "question" id="${item.number}">Number ${item.number}: ${item.question}</h1>
      <h2 class= "answer">
        <label for="${item.choice}">${item.choice.a}</label>
        <input type="radio" name="${item.number}" value="${item.choice.a}"  
      </h2>
      <h3 class= "answer">
        <label for="${item.choice}">${item.choice.b}</label>
        <input type="radio" name="${item.number}" value="${item.choice.b}"  
      </h3>
      <h4 class= "answer">
        <label for="${item.choice}">${item.choice.c}</label>
        <input type="radio" name="${item.number}" value="${item.choice.c}"  
      </h4>
      <h5 class= "answer">
        <label for="${item.choice}">${item.choice.d}</label>
        <input type="radio" name="${item.number}" value="${item.choice.d}"  
      </h5>
      
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
    if (answerSelected === `${question.correctAnswer}`) {
      score++;
    }
    DOMSelectors.scoreContainer.innerHTML = `<h1>You got ${score} questions correct!</h1>`;
  });
  DOMSelectors.submitButton.addEventListener("click", quizResults);
};

init();
