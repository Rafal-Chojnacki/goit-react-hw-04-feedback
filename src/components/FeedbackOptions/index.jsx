import React from "react";
import css from "./feedbackOptions.module.css";

const FeedbackOptions = ({ onFeedbackChange }) => {
  const handleGood = () => {
    onFeedbackChange("good");
  };

  const handleNeutral = () => {
    onFeedbackChange("neutral");
  };

  const handleBad = () => {
    onFeedbackChange("bad");
  };

  return (
    <div>
      <button className={css.goodBtn} type="button" onClick={handleGood}>
        Good
      </button>
      <button className={css.neutralBtn} type="button" onClick={handleNeutral}>
        Neutral
      </button>
      <button className={css.badBtn} type="button" onClick={handleBad}>
        Bad
      </button>
    </div>
  );
};

export default FeedbackOptions;
