import { useEffect, useState, useMemo } from "react";
import "./app.css";
import Trivia from "./component/Trivia";
import Timer from "./component/Timer";

function App() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "What is the name of the developer of this app?",
      answers: [
        {
          text: "Elon Musk",
          correct: false,
        },
        {
          text: "Kelechi",
          correct: true,
        },
        {
          text: "Bill Gates",
          correct: false,
        },
        {
          text: "Mark",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "Who is the president of Nigeria?",
      answers: [
        {
          text: "Atiku Abubakar",
          correct: false,
        },
        {
          text: "Kwankwaso",
          correct: false,
        },
        {
          text: "Peter Obi",
          correct: false,
        },
        {
          text: "Bola Ahmed Tinubu",
          correct: true,
        },
      ],
    },
    {
      id: 3,
      question: "Who did majority of Nigerians actually vote for?",
      answers: [
        {
          text: "Atiku Abubakar",
          correct: false,
        },
        {
          text: "Kwankwaso",
          correct: false,
        },
        {
          text: "Peter Obi",
          correct: true,
        },
        {
          text: "Bola Ahmed Tinubu",
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question: "Who is the current fastest man in the world?",
      answers: [
        {
          text: "Kelechi",
          correct: false,
        },
        {
          text: "Noah Lyles",
          correct: true,
        },
        {
          text: "Peter Obi",
          correct: false,
        },
        {
          text: "Usain Bolt",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "Who is the current strongest man in the world?",
      answers: [
        {
          text: "Anthony Joshua",
          correct: false,
        },
        {
          text: "Mike Tyson",
          correct: false,
        },
        {
          text: "Mitchell Hooper",
          correct: true,
        },
        {
          text: "Kelechi",
          correct: false,
        },
      ],
    },
  ];

  let money = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 400" },
        { id: 5, amount: "$ 500" },
        { id: 6, amount: "$ 1,000" },
        { id: 7, amount: "$ 2,000" },
        { id: 8, amount: "$ 4,000" },
        { id: 9, amount: "$ 8,000" },
        { id: 10, amount: "$ 16,000" },
        { id: 11, amount: "$ 32,000" },
        { id: 12, amount: "$ 64,000" },
        { id: 13, amount: "$ 125,000" },
        { id: 14, amount: "$ 250,000" },
        { id: 15, amount: "$ 500,000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(
        (money.find((m) => m.id === questionNumber - 1) || { amount: "$ 0" })
          .amount
      );
  }, [questionNumber, money]);

  return (
    <>
      <div className="app">
        <div className="main">
          {stop ? (
            <h1 className="endText">You earned :{earned}</h1>
          ) : (
            <>
              <div className="top">
                <h1 className="head"> WHO WANTS TO BE A MILLIONAIRE</h1>
                <div className="timer">
                  <Timer setStop={setStop} questionNumber={questionNumber} />
                </div>
              </div>
              <div className="bottom">
                <Trivia
                  data={data}
                  setStop={setStop}
                  questionNumber={questionNumber}
                  setQuestionNumber={setQuestionNumber}
                />
              </div>
            </>
          )}
        </div>

        <div className="pyramid">
          <ul className="list">
            {money.map((m) => (
              <li
                className={
                  questionNumber === m.id ? "listItem active" : "listItem"
                }
              >
                <span className="listItemNumber"> {m.id} </span>
                <span className="listItemAmount"> {m.amount} </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
