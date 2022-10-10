import React, { useEffect, useState } from "react";
import "./question.css";
import questions from "./questions.json";
function Question(props) {
  const [currQuestion, setCurrQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [level, setLevel] = useState();
  const [category, setCategory] = useState("genin");
  const [score, setScore] = useState(0);

  const questionCheck = () => {
    if (currQuestion <= 4) {
      if (selectedAnswer === category[currQuestion].correct) {
        console.log("answer is correct");
        setCurrQuestion(currQuestion + 1);
        setScore(score + 1);
      } else if (
        selectedAnswer !== category[currQuestion].correct &&
        selectedAnswer !== ""
      )
        console.log("answer is wrong");
      setCurrQuestion(currQuestion + 1);
    }
  };

  function createQuestion() {
    setLevel(props.quizlevel);
    if (level === "genin") setCategory(questions[0].geninQuestions);
    if (level === "chunin") setCategory(questions[1].chuninQuestions);
    if (level === "jonin") setCategory(questions[2].joninQuestions);
    if (level === "anbu") setCategory(questions[3].anbuQuestions);
    if (level === "kage") setCategory(questions[4].kageQuestions);
  }

  useEffect(() => {
    createQuestion();
  });

  function endQuiz() {
    window.location.reload()
  }

  return (
    <div className="question-container">
     {currQuestion <= 4 && <div className="question-header">
        <div className="question">
          <h3>{category[currQuestion].questionText}</h3>
        </div>
        <div className="answers">
          <div
            onMouseOver={() => setSelectedAnswer("a")}
            onClick={() => questionCheck()}
            className="answer"
          >
            {category[currQuestion].a}
          </div>
          <div
            onMouseOver={() => setSelectedAnswer("b")}
            onClick={() => questionCheck()}
            className="answer"
          >
            {category[currQuestion].b}
          </div>
          <div
            onMouseOver={() => setSelectedAnswer("c")}
            onClick={() => questionCheck()}
            className="answer"
          >
            {category[currQuestion].c}
          </div>
          <div
            onMouseOver={() => setSelectedAnswer("d")}
            onClick={() => questionCheck()}
            className="answer"
          >
            {category[currQuestion].d}
          </div>
        </div>
      </div>}

      {currQuestion >= 5 && <div className="quizend-container">
        <h1>Quiz ended your score is {score}</h1>
        <button onClick={() => endQuiz()}>deneme</button>
      </div>}
    </div>
  );
}

export default Question;
