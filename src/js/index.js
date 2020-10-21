
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
      
      
      `
    )
  );
};
