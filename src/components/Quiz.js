import React, { useState } from "react";
import { useEffect } from "react";

export default function Quiz() {
  const questions = [
    {
      questionText: "What is the capital of England?",
      answerOptions: [
        { answerText: "New York", isCorrect: false },
        { answerText: "London", isCorrect: true },
        { answerText: "Berlin", isCorrect: false },
        { answerText: "Paris", isCorrect: false },
      ],
    },
    {
      questionText: "Who is CEO of Tesla?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: true },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Tony Stark", isCorrect: false },
      ],
    },
    {
      questionText: "The iPhone was created by which company?",
      answerOptions: [
        { answerText: "Apple", isCorrect: true },
        { answerText: "Intel", isCorrect: false },
        { answerText: "Amazon", isCorrect: false },
        { answerText: "Microsoft", isCorrect: false },
      ],
    },
    {
      questionText: "How many colors are there in a rainbow?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "4", isCorrect: false },
        { answerText: "6", isCorrect: false },
        { answerText: "7", isCorrect: true },
      ],
    },
    {
      questionText: "Area 51 is located in which US state",
      answerOptions: [
        { answerText: "Nevada", isCorrect: true },
        { answerText: "New York", isCorrect: false },
        { answerText: "Texas", isCorrect: false },
        { answerText: "Florida", isCorrect: false },
      ],
    },
  ];

  const [currentQ, setCurrentQ] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [seconds, setSeconds] = useState(30);

  let time;
  useEffect(() => {
    time = setInterval(() => {
      setSeconds(seconds - 1);
      if (seconds == 0) {
        setSeconds(30);
        answerHandler(false);
      }
    }, 1000);
    return () => {
      clearInterval(time);
    };
  });

  const answerHandler = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
      setSeconds(30);
    }
    const nextQ = currentQ + 1;
    if (nextQ < questions.length) {
      setCurrentQ(nextQ);
    } else {
      setShowScore(true);
    }
  };

  return (
    <>
      <div className="grid h-screen place-items-center">
        <div className="bg-[#283153] w-1/2 p-10 rounded-lg min-h-1/2">
          {showScore ? (
            <div className="score-section text-white">
              You scored {score} out of {questions.length}
            </div>
          ) : (
            <>
              <div className="text-md bg-slate-600 w-[200px] rounded-lg p-5px h-20 grid place-items-center text-white text-center absolute top-0 right-0 m-1">
                <h1>
                  Time remaining:
                  <br />
                  00:
                  {seconds < 10 ? "0" + seconds : seconds}
                </h1>
              </div>

              <div className="question-section">
                <div className="text-white text-3xl mb-2">
                  <span>Question {currentQ + 1}</span>/{questions.length}
                </div>
                <div className="text-white text-lg">
                  {questions[currentQ].questionText}
                </div>
              </div>
              <div className="answer-section">
                {questions[currentQ].answerOptions.map((answerOption) => (
                  <button
                    className="bg-white p-5 rounded-lg m-5 w-full hover:grey flex hover:bg-[#56487b] hover:text-white"
                    onClick={() => answerHandler(answerOption.isCorrect)}
                  >
                    {answerOption.answerText}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
