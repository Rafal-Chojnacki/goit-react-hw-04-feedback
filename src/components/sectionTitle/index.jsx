import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/statistics';
import css from '../FeedbackOptions/feedbackOptions.module.css';
import React from 'react';
import { useState } from 'react';


const SectionTitle = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedbackChange = (type) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1,
    }));
  };

  const { good, neutral, bad } = feedback;

  return (
    <div className={css.wrapper}>
      <h1>Please leave feedback</h1>
      <FeedbackOptions onFeedbackChange={handleFeedbackChange} />
      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default SectionTitle;
