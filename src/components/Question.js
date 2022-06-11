import React, { useEffect, useState } from "react";

function Question({ question, onAnswered }) {
  let [timeRemaining, setTimeRemaining] = useState(10);

  // add useEffect code

  function handleAnswer(isCorrect) {
    setTimeRemaining(10);
    onAnswered(isCorrect);
  }

  useEffect(()=>{
    let timer = setTimeout(()=>{
        setTimeRemaining(--timeRemaining)
        if(timeRemaining ===0){
          handleAnswer()
        }
    },1000)

    // if(timeRemaining ===0){
    //   onAnswered()
    // }
  
    return function cleanUp(){
      clearTimeout(timer)
    }

  })

  const { id, prompt, answers, correctIndex } = question;

  return (
    <>
      <h1>Question {id}</h1>
      <h3>{prompt}</h3>
      {answers.map((answer, index) => {
        const isCorrect = index === correctIndex;
        return (
          <button key={answer} onClick={() => handleAnswer(isCorrect)}>
            {answer}
          </button>
        );
      })}
      <h5>{timeRemaining} seconds remaining</h5>
    </>
  );
}

export default Question;
