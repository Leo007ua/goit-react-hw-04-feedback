import { Component } from 'react';
import Buttons from './Buttons/Buttons';
import Notification from './Notification/Notification';
import Statistics from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onBtnClick = event => {
    const currentName = event.target.name;
    this.setState(prevState => {
      return {
        [currentName]: prevState[currentName] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const positive = (this.state.good * 100) / this.countTotalFeedback();
    return positive;
  };

  render() {
    const btnKeys = Object.keys(this.state);
    return (
      <>
        <Buttons onBtnClick={this.onBtnClick} btnKeys={btnKeys} />

        {this.countTotalFeedback() > 0 ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </>
    );
  }
};
