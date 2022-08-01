import React, { useState } from "react";

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
    }
  ];

  const [currentQ, setCurrentQ] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const answerHandler = (isCorrect) => {
    if (isCorrect) {
      //   alert("Correct");
      setScore(score + 1);
    }
    const nextQ = currentQ + 1;
    // console.log(nextQ," ",questions.length)
    if (nextQ < questions.length) {
      setCurrentQ(nextQ);
    } else {
      setShowScore(true);
    }
  };

  // "bg-red-500 min-h-200 w-400 rounded-15px flex-auto justify-evenly h-min p-20px border-15"
  // grid h-screen place-items-center
  return (
    <div className="grid h-screen place-items-center">
      <div className="bg-[#283153] w-1/2 p-10 rounded-lg min-h-1/2">
        {showScore ? (
          <div className="score-section text-white">
            You scored {score} out of {questions.length}
          </div>
        ) : (
          <>
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
  );
}
