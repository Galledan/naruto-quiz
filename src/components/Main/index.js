import React, { useEffect, useState } from "react";
import "./main.css";
import Quiz from "../Quiz";

function Main() {
  const [isQuizActive, setQuizActive] = useState(false);
  const [quizLevel, setQuizLevel] = useState();
  const [loading, setLoading] = useState(false);

  function activateQuiz(level) {
    setQuizActive(true);
    setQuizLevel(level);
  }

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="main-container">

      {
        loading ?  
        
        <div className="not-loaded-container">
          <img className="loading-img" src={require("../../images/sharingan.png")} alt="loading"/>
          <h1 className="loading-text">Loading</h1>
        </div>
        
        :
        
        <div className="loaded-container">
        {!isQuizActive && (
          <div className="info-container">
            <div className="info-title">
              <span>Welcome to the Naruto Quiz!</span>
            </div>
            <div className="info-textbox">
              <p>Rules of the Quiz are on the below</p>
              <p>1. You will have 15 seconds for questions(not implemented yet) </p>
              <p>2. Once you pick an answer there is no turning back</p>
              <p>
                3. You have to guess all correct answers for each level to
                access to other level
              </p>
            </div>
            <div className="buttons">
              <div className="level">
                <button onClick={() => activateQuiz("Genin")} id="geninBtn">
                  Genin Level
                </button>
              </div>
              <div className="level">
                <button onClick={() => activateQuiz("Chunin")} id="chuninBtn">
                  Chunin Level
                </button>
              </div>

              <div className="level">
                <button onClick={() => activateQuiz("Jonin")} id="joninBtn">
                  Jonin Level
                </button>
              </div>
              <div className="level">
                <button onClick={() => activateQuiz("Anbu")} id="anbuBtn">
                  Anbu Level
                </button>
              </div>
              <div className="level">
                <button onClick={() => activateQuiz("Kage")} id="kageBtn">
                  Kage Level
                </button>
              </div>
            </div>
          </div>
        )}
        {isQuizActive && 
          <div className="quiz-container">
            <Quiz quizStatus={isQuizActive} quizlevel={quizLevel} />
          </div>}
        </div>}
    </div>
  );
}

export default Main;
