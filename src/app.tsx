import { useState } from "preact/hooks";
import { Dialog } from "@capacitor/dialog";
import "./app.scss";
import { useShake } from "./useShake";
import questions from "./questions.json";
import extraQuestions from "./extra_questions.json";

export function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questionSet, setQuestionSet] = useState<"original" | "extra">(
    "original"
  );
  useShake(() => {
    Dialog.alert({
      title: "Shake it...",
      message: "Like a Polaroid picture..."
    }).catch((e) => {
      console.error(e);
    });
  });

  return (
    <div className="container">
      <p className="question">
        {questionSet === "original"
          ? questions[currentQuestionIndex]
          : extraQuestions[currentQuestionIndex]}
      </p>

      <div className="button-container">
        <button
          className="randomize-button"
          onClick={() => {
            setQuestionSet("original");
            setCurrentQuestionIndex(
              Math.floor(Math.random() * questions.length)
            );
          }}
        >
          Random question (original)
        </button>
        <button
          className="randomize-button"
          onClick={() => {
            setQuestionSet("extra");
            setCurrentQuestionIndex(
              Math.floor(Math.random() * extraQuestions.length)
            );
          }}
        >
          Random question (extra)
        </button>
      </div>
    </div>
  );
}
