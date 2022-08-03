import React, { useState } from "react";
import { useEffect } from "react";

export default function Quiz({ topic, setTopic }) {
  const questions = [
    [
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
        questionText:
          "What is the latitude that runs through the center of the Earth?",
        answerOptions: [
          { answerText: "Tropic of Cancer", isCorrect: false },
          { answerText: "Equator", isCorrect: true },
          { answerText: "Tropic of Capricorn", isCorrect: false },
          { answerText: "Prime Meridian", isCorrect: false },
        ],
      },
      {
        questionText: "Which of the following is not an Ocean?",
        answerOptions: [
          { answerText: "Arabian Ocean", isCorrect: true },
          { answerText: "Indian Ocean", isCorrect: false },
          { answerText: "Pacific Ocean", isCorrect: false },
          { answerText: "Atlantic Ocean", isCorrect: false },
        ],
      },
      {
        questionText: "Which country has the highest population?",
        answerOptions: [
          { answerText: "USA", isCorrect: false },
          { answerText: "UK", isCorrect: false },
          { answerText: "India", isCorrect: false },
          { answerText: "China", isCorrect: true },
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
      {
        questionText: "Which is the longest river in the world",
        answerOptions: [
          { answerText: "Nile", isCorrect: true },
          { answerText: "Indus", isCorrect: false },
          { answerText: "Thames", isCorrect: false },
          { answerText: "Ganga", isCorrect: false },
        ],
      },
      {
        questionText: "Which is the largest island in the world",
        answerOptions: [
          { answerText: "Greenland", isCorrect: true },
          { answerText: "Bornea", isCorrect: false },
          { answerText: "Madagascar", isCorrect: false },
          { answerText: "New Guinea", isCorrect: false },
        ],
      },
      {
        questionText: "Which is the largest desert in the world?",
        answerOptions: [
          { answerText: "Gobi Desert", isCorrect: false },
          { answerText: "Great Australian", isCorrect: false },
          { answerText: "Sahara Desert", isCorrect: true },
          { answerText: "Arabian Desert", isCorrect: false },
        ],
      },
      {
        questionText: "What is the inner most layer of Earth called?",
        answerOptions: [
          { answerText: "Inner Core", isCorrect: true },
          { answerText: "Mantle", isCorrect: false },
          { answerText: "Crust", isCorrect: false },
          { answerText: "Magma", isCorrect: false },
        ],
      },
      {
        questionText: "Which is the smallest country in the world?",
        answerOptions: [
          { answerText: "USA", isCorrect: false },
          { answerText: "Vatican City", isCorrect: true },
          { answerText: "Switzerland", isCorrect: false },
          { answerText: "Iran", isCorrect: false },
        ],
      },
    ],

    [
      {
        questionText: "Which famous monument did Shah Jahan build?",
        answerOptions: [
          { answerText: "Lahore Fort", isCorrect: false },
          { answerText: "Taj Mahal", isCorrect: true },
          { answerText: "Eifel Tower", isCorrect: false },
          { answerText: "Golestan Palace", isCorrect: false },
        ],
      },
      {
        questionText: "How long did it take to build the Titanic?",
        answerOptions: [
          { answerText: "1 year", isCorrect: false },
          { answerText: "2 years", isCorrect: false },
          { answerText: "3 years", isCorrect: true },
          { answerText: "4 years", isCorrect: false },
        ],
      },
      {
        questionText: "The period of unrecorded history is known as?",
        answerOptions: [
          { answerText: "Pre-historic Age", isCorrect: true },
          { answerText: "Dark Age", isCorrect: false },
          { answerText: "Ice Age", isCorrect: false },
          { answerText: "Stone Age", isCorrect: false },
        ],
      },
      {
        questionText: "The dynasty which ruled China for nearly 400 years",
        answerOptions: [
          { answerText: "Xian", isCorrect: false },
          { answerText: "Shifu", isCorrect: false },
          { answerText: "Han", isCorrect: true },
          { answerText: "Khan", isCorrect: false },
        ],
      },
      {
        questionText: "Who was the most famous student of Socrates",
        answerOptions: [
          { answerText: "Aristotle", isCorrect: false },
          { answerText: "Plato", isCorrect: true },
          { answerText: "Sophocles", isCorrect: false },
          { answerText: "Pindar", isCorrect: false },
        ],
      },
      {
        questionText: "What was the capital of ancient Hebrews",
        answerOptions: [
          { answerText: "Jerusalem", isCorrect: true },
          { answerText: "Gaza", isCorrect: false },
          { answerText: "Memphis", isCorrect: false },
          { answerText: "York", isCorrect: false },
        ],
      },
      {
        questionText:
          "Who said the following famous words “I Came, I Saw, I Conquered’?",
        answerOptions: [
          { answerText: "Aristotle", isCorrect: false },
          { answerText: "Julius Caesar", isCorrect: true },
          { answerText: "Sophocles", isCorrect: false },
          { answerText: "Plato", isCorrect: false },
        ],
      },
      {
        questionText:
          "Which of the following had invented a type of water-clock to measure time?",
        answerOptions: [
          { answerText: "Sumerians", isCorrect: true },
          { answerText: "Assyrian", isCorrect: false },
          { answerText: "Akkadian", isCorrect: false },
          { answerText: "Babylonian", isCorrect: false },
        ],
      },
      {
        questionText:
          "The Great Wall of China was made during the reign of which of the following ruler?",
        answerOptions: [
          { answerText: "King Zhuangxiang", isCorrect: false },
          { answerText: "Qin Shi Huang", isCorrect: true },
          { answerText: "Qin Er Shi", isCorrect: false },
          { answerText: "Gengis Khan", isCorrect: false },
        ],
      },
      {
        questionText: "Who was the first Roman emperor?",
        answerOptions: [
          { answerText: "Julian", isCorrect: false },
          { answerText: "Tiberius", isCorrect: false },
          { answerText: "Epicurus", isCorrect: false },
          { answerText: "Augustus", isCorrect: true },
        ],
      },
    ],
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
    if (nextQ < questions[topic].length) {
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
              You scored {score} out of {questions[topic].length}
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
                  <span>Question {currentQ + 1}</span>/{questions[topic].length}
                </div>
                <div className="text-white text-lg">
                  {questions[topic][currentQ].questionText}
                </div>
              </div>
              <div className="answer-section">
                {questions[topic][currentQ].answerOptions.map(
                  (answerOption) => (
                    <button
                      className="bg-white p-5 rounded-lg m-5 w-full hover:grey flex hover:bg-[#56487b] hover:text-white"
                      onClick={() => answerHandler(answerOption.isCorrect)}
                    >
                      {answerOption.answerText}
                    </button>
                  )
                )}
              </div>
            </>
          )}
        </div>
      </div>
      <button
        className="sticky left-0 bottom-0 bg-slate-500 hover:bg-slate-600 rounded-lg p-1"
        onClick={() => {
          if(window.confirm("Are you sure?\nAny unsaved progress will be lost")){setTopic(-1);}
        }}
      >
        Return to Dashboard
      </button>
    </>
  );
}
