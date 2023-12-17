import React, { useState, useEffect } from "react";
import useSound from "use-sound";

interface Props {
  data: {
    id: number;
    question: string;
    answers: { text: string; correct: boolean }[];
  }[];
  setStop: React.Dispatch<React.SetStateAction<boolean>>;
  questionNumber: number;
  setQuestionNumber: React.Dispatch<React.SetStateAction<number>>;
}

const Trivia = ({
  data,
  setStop,
  questionNumber,
  setQuestionNumber,
}: Props) => {
  const [question, setQuestion] = useState(data[0]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  const delay = (duration: any, callback: any) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  const handleClick = (a: any) => {
    setSelectedAnswer(a);
    setClassName("answer active");
    delay(3000, () =>
      setClassName(a.correct ? "answer correct" : "answer wrong")
    );
    delay(6000, () => {
      if (a.correct) {
        setQuestionNumber((prev) => prev + 1);
        setSelectedAnswer(null);
      } else {
        setStop(true);
      }
    });
  };

  return (
    <div className="trivia">
      <div className="question"> {question.question}</div>
      <div className="answers">
        {question.answers.map((a) => (
          <div
            className={selectedAnswer === a ? className : "answer"}
            onClick={() => handleClick(a)}
          >
            {a.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trivia;
