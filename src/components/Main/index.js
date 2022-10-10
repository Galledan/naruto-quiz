import React, { useState } from "react";
import "./main.css";
import Quiz from "../Quiz";

function Main() {
  const [isQuizActive, setQuizActive] = useState(false);
  const [quizLevel, setQuizLevel] = useState()

  function activateQuiz(level) {
    setQuizActive(true);
    setQuizLevel(level)
  }

  return (
    <div className="main-container">
     {!isQuizActive && <div className="info-container">
        <div className="info-title">
          <span>Welcome to the Naruto Quiz!</span>
        </div>
        <div className="info-textbox">
          <p>Rules of the Quiz are on the below</p>
          <p>1. You will have 15 seconds for questions</p>
          <p>2. Once you pick an answer there is no turning back</p>
          <p>
            3. You have to guess all correct answers for each level to access to
            other level
          </p>
        </div>
        <div className="buttons">
          <div className="level">
            <button onClick={() => activateQuiz('genin')} id="geninBtn">
              Genin Level
            </button>
          </div>
          <div className="level">
            <button onClick={() => activateQuiz('chunin')} id="chuninBtn">
              Chunin Level
            </button>
          </div>

          <div className="level">
            <button onClick={() =>  activateQuiz('jonin')} id="joninBtn">
              Jonin Level
            </button>
          </div>
          <div className="level">
            <button onClick={() =>  activateQuiz('anbu')} id="anbuBtn">
              Anbu Level
            </button>
          </div>
          <div className="level">
            <button onClick={() =>  activateQuiz('kage')} id="kageBtn">
              Kage Level
            </button>
          </div>
        </div>
      </div>}
      {isQuizActive && <div className="quiz-container"><Quiz quizStatus={isQuizActive} quizlevel={quizLevel}/></div>}
    </div>
  );
}

export default Main;
