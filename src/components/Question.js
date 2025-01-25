import React, { useState, useEffect } from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeRemaining]);

  useEffect(() => {
    if (timeRemaining === 0) {
      setTimeRemaining(10);
      onAnswered(false);
    }
  }, [timeRemaining, onAnswered]);

  return (
    <div>
      <h1>{question.text}</h1>
      <ul>
        {question.answers.map((answer) => (
          <li key={answer}>{answer}</li>
        ))}
      </ul>
      {/* Update the timer text to match the test expectation */}
      <p>{timeRemaining} seconds remaining</p>
    </div>
  );
}

export default Question;
