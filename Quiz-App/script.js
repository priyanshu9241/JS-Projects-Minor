/*
  TODO: 2. Select all elements needed
    * The form element (has the id `quiz-form`)
    * The answer inputs (have the class `answer`)
    * BONUS: The questions (have the class `question-item`)
    * BONUS: The alert (has the id `alert`)

*/
const form = document.getElementById("quiz-form");
const ans = Array.from(document.querySelectorAll(".answer"));
const ques = document.querySelectorAll(".question-item");
const alert = document.querySelector("#alert");

// TODO: 3. Create a submit event listener for the form that does the following.
form.addEventListener("submit", (e) => {
  //    1. Prevent the default behaviour
  e.preventDefault();
  //    6. BONUS: Make sure unanswered questions show up as incorrect. The easiest way to do this is to add the incorrect class and removing the correct class from all question items before checking the correct answers
  ques.forEach((questionItem) => {
    questionItem.classList.add("incorrect");
    questionItem.classList.remove("correct");
  });
  //    2. Get all selected answers (use the `checked` property on the input to determine if it is selected or not)
  //    3. Loop through the selected answer to see if they are correct or not (Check the value of the answer to see if it is the string "true")
  const checkedAnswers = ans.filter((answer) => answer.checked);
  checkedAnswers.forEach((answer) => {
    const isCorrect = answer.value === "true";
    //    4. For each correct answer add the class `correct` to the parent with the class `question-item` and remove the class `incorrect`.
    //    5. For each incorrect answer add the class `incorrect` to the parent with the class `question-item` and remove the class `correct`.
    const questionItem = answer.closest(".question-item");
    if (isCorrect) {
      questionItem.classList.add("correct");
      questionItem.classList.remove("incorrect");
    } else {
      questionItem.classList.add("incorrect");
      questionItem.classList.remove("correct");
    }
  });
  const allTrue = checkedAnswers.every((answer) => answer.value === "true");
  if (allTrue && checkedAnswers.length === ques.length) {
    alert.classList.add("active");
    setTimeout(() => {
      alert.classList.remove("active");
    }, 2000);
  }
});

//    7. BONUS: If all answers are correct show the element with the id `alert` and hide it after one second (look into setTimeout) (use the class active to show the alert and remove the class to hide it)
