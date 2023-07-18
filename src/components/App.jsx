import { useState } from 'react';
import Buttons from './Buttons/Buttons';
import Notification from './Notification/Notification';
import Statistics from './Statistics/Statistics';

export default function App() {
  const [states, setStates] = useState({ good: 0, neutral: 0, bad: 0 });

  const onBtnClick = (event) => {
    const currentName = event.target.name;
    setStates(prevState => {
      return {...prevState,
        [currentName]: prevState[currentName] + 1,
      };
    });
  };

  const countTotalFeedback = () => {
    const total = states.good + states.neutral + states.bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const positive = (states.good * 100) / countTotalFeedback();
    return positive;
  };

  const btnKeys = Object.keys(states);
  return (
    <>
      <Buttons onBtnClick={onBtnClick} btnKeys={btnKeys} />

{countTotalFeedback() > 0 ? (
  <Statistics
    good={states.good}
    neutral={states.neutral}
    bad={states.bad}
    total={countTotalFeedback}
    positivePercentage={countPositiveFeedbackPercentage}
  />
) : (
  <Notification message="There is no feedback" />
)}
    </>
  );
}
