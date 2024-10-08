import { useState, useEffect } from "react";
import "./App.css";
import Description from "./Description";
import Options from "./Options";
import Feedback from "./Feedback";
import Notification from "./Notification";

export default function App() {
  const savedRatings = window.localStorage.getItem("saved-ratings");
  const initialRatings = savedRatings
    ? JSON.parse(savedRatings)
    : { good: 0, neutral: 0, bad: 0 };

  const [ratings, setRatings] = useState(initialRatings);

  const totalFeedback = ratings.good + ratings.neutral + ratings.bad;

  useEffect(() => {
    window.localStorage.setItem("saved-ratings", JSON.stringify(ratings));
  }, [ratings]);

  const updateFeedback = (feedbackType) => {
    setRatings((currentRatings) =>
      feedbackType === "reset"
        ? {
            good: 0,
            neutral: 0,
            bad: 0,
          }
        : {
            ...currentRatings,
            [feedbackType]: currentRatings[feedbackType] + 1,
          }
    );
  };

  return (
    <>
      <Description />
      <Options total={totalFeedback} onUpdate={updateFeedback} />
      {totalFeedback > 0 ? (
        <Feedback value={ratings} total={totalFeedback} />
      ) : (
        <Notification />
      )}
    </>
  );
}
