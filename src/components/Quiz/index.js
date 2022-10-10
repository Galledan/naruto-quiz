import React from 'react'
import './quiz.css'
import '../Question/questions'
import Question from '../Question'

function Quiz(props) {

  return (
    <div className='quiz-container'>
     <Question quizStatus={props.quisStatus} quizlevel={props.quizlevel}/>
    </div>
  )
}

export default Quiz